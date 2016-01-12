(ns web-midi.core-spec
  (:require-macros 
    [cemerick.cljs.test :refer [is deftest with-test run-tests testing test-var]])
  (:require [cemerick.cljs.test :as t]
            [web-midi.core :as wa]))

(deftest foo-test
  (is (wa/foo) "foo"))