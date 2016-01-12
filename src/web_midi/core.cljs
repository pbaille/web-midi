(ns web-midi.core
  (:require [goog.net.XhrIo]
            [cljs.core.async :as async :refer [<! >! put! take! chan close!]]
            [clojure.string :as s])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [utils.macros :refer [defnaults]]))

(defn log [& args] (doseq [x args] (.log js/console x)))

(defn now [] (.. js/window -performance now))

(defn get-access []
  (let [ch (chan)]
    (doto (.requestMIDIAccess js/navigator)
      (.then (fn [a] (go (>! ch a) (close! ch))) 
             (fn [err] (go (>! ch :failed) (close! ch)))))
    ch))

(defn inputs [access] (.inputs access))
(defn outputs [access] (.outputs access))

(defn get-output [name access] 
  (first (filter #(= (.-name %) name) (outputs access))))
(defn get-intput [name access] 
  (first (filter #(= (.-name %) name) (inputs access))))

(defn note-on 
  ([out chan pitch vel] (note-on out chan pitch vel (now)))
  ([out chan pitch vel at] 
   (.send out (clj->js [(+ 143 chan) pitch vel]) at)))

(defn note-off
  ([out chan pitch] (note-off out chan pitch (now)))
  ([out chan pitch at] 
   (.send out (clj->js [(+ 127 chan) pitch 127]) at)))

(defnaults play-note
  [out _ chan 1 pitch 60 vel 60 dur 1000 at nil now? true]
  (let [at (if now? (+ at (now)) at)]
    (note-on out chan pitch vel at)
    (note-off out chan pitch (+ at dur))))


(comment 
  (go 
    (let [access (<! (get-access))
          out (get-output "Bus IAC 2" access)]
      (play-note out 1 62 65 1000 1000 false))))

