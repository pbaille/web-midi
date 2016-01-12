(ns utils.macros)

(defn fill-with [coll size el]
  (take size (concat coll (cycle [el]))))

;function def with default for arguments, single arity function only
(defmacro defnaults [name & tail]
  "function constructor with defaults args values
  
    ex1: with defaults val for all args 
    
      (defnaults adder [a 1 b 1 c 1] (+ a b c))
      (adder 2 2 2) => 6
      (adder 2 1) => 4
      (adder 1) => 3
      (adder) => 3
    
    ex1: with defaults val for the 2 last args only 
    
      (defnaults adder [a _ b 1 c 1] (+ a b c))
      (adder 2 2 2) => 6
      (adder 2 1) => 4
      (adder 1) => 3
      (adder) => ArityException Wrong number of args (0)
  
    another notable property is that defaults values expressions 
    can refer to previous defaults value expressions like in a let binding form
    
    ex3:
  
      (defnaults adder [a _ b a c b] (+ a b c)) is valid
      b defaults to a value and c to b value 
      (adder 1) => 3
      (adder 1 2) => 5
  "
  (let [docstring (when (string? (first tail))(first tail))
        argv (if docstring (second tail) (first tail))
        cnt (/ (count argv) 2)
        no-defaults-cnt (count (take-while #(= (second %) '_) (partition 2 argv)))
        args (vec (take-nth 2 argv))
        body (if docstring (nnext tail) (next tail))]
   `(defn ~name
      ; define inferiors arity 
      ~@(map (fn [x] (let [args (vec (take x args))]
               `(~args (~name ~@(fill-with args cnt :*))))) 
             (range no-defaults-cnt cnt))
      ;define main arity
      (~args 
       (let ~(vec (mapcat (fn [[a# b#]] [a# `(if (= ~a# :*) ~b# ~a#)]) 
                          (partition 2 (vec (drop (* 2 no-defaults-cnt) argv)))))
       ~@body)))))