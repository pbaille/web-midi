(defproject web-midi "0.0-SNAPSHOT"
  :description "web MIDI API wrapper for cljs"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]]

  :plugins [[lein-cljsbuild "1.0.0"]
            [com.cemerick/clojurescript.test "0.3.0"]]
  
  :test-paths ["test"]
  
  ; :hooks [leiningen.cljsbuild]
  
  :source-paths ["src"]
  
  :cljsbuild {:test-commands {"unit" ["phantomjs" :runner
                                      "this.literal_js_was_evaluated=true"
                                      "target/unit-test.js"]}
              :builds
              {:dev {:source-paths ["src" "brepl"]
                     :jar true
                     :compiler {:output-to "target/main.js"
                                :optimizations :whitespace
                                :source-map "target/main.js.map"}}
               :prod {:source-paths ["src"]
                     :jar true
                     :compiler {:output-to "target/main-prod.js"
                                :optimizations :advanced
                                :pretty-print false
                                :source-map "target/main-prod.js.map"}}
               :test {:source-paths ["test"]
                      :jar true
                      :compiler {:output-to "target/unit-test.js"
                                 :optimizations :whitespace}}}})
