// Compiled by ClojureScript 0.0-2069
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11805 = (function (f,fn_handler,meta11806){
this.f = f;
this.fn_handler = fn_handler;
this.meta11806 = meta11806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11805.cljs$lang$type = true;
cljs.core.async.t11805.cljs$lang$ctorStr = "cljs.core.async/t11805";
cljs.core.async.t11805.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11805");
});
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11807){var self__ = this;
var _11807__$1 = this;return self__.meta11806;
});
cljs.core.async.t11805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11807,meta11806__$1){var self__ = this;
var _11807__$1 = this;return (new cljs.core.async.t11805(self__.f,self__.fn_handler,meta11806__$1));
});
cljs.core.async.__GT_t11805 = (function __GT_t11805(f__$1,fn_handler__$1,meta11806){return (new cljs.core.async.t11805(f__$1,fn_handler__$1,meta11806));
});
}
return (new cljs.core.async.t11805(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11809 = buff;if(G__11809)
{var bit__3995__auto__ = null;if(cljs.core.truth_((function (){var or__3374__auto__ = bit__3995__auto__;if(cljs.core.truth_(or__3374__auto__))
{return or__3374__auto__;
} else
{return G__11809.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11809.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11809);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11810 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11810);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11810);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4192__auto___11811 = n;var x_11812 = 0;while(true){
if((x_11812 < n__4192__auto___11811))
{(a[x_11812] = 0);
{
var G__11813 = (x_11812 + 1);
x_11812 = G__11813;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11814 = (i + 1);
i = G__11814;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11818 = (function (flag,alt_flag,meta11819){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11819 = meta11819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11818.cljs$lang$type = true;
cljs.core.async.t11818.cljs$lang$ctorStr = "cljs.core.async/t11818";
cljs.core.async.t11818.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11818");
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11820){var self__ = this;
var _11820__$1 = this;return self__.meta11819;
});
cljs.core.async.t11818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11820,meta11819__$1){var self__ = this;
var _11820__$1 = this;return (new cljs.core.async.t11818(self__.flag,self__.alt_flag,meta11819__$1));
});
cljs.core.async.__GT_t11818 = (function __GT_t11818(flag__$1,alt_flag__$1,meta11819){return (new cljs.core.async.t11818(flag__$1,alt_flag__$1,meta11819));
});
}
return (new cljs.core.async.t11818(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11824 = (function (cb,flag,alt_handler,meta11825){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11825 = meta11825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11824.cljs$lang$type = true;
cljs.core.async.t11824.cljs$lang$ctorStr = "cljs.core.async/t11824";
cljs.core.async.t11824.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11824");
});
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11826){var self__ = this;
var _11826__$1 = this;return self__.meta11825;
});
cljs.core.async.t11824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11826,meta11825__$1){var self__ = this;
var _11826__$1 = this;return (new cljs.core.async.t11824(self__.cb,self__.flag,self__.alt_handler,meta11825__$1));
});
cljs.core.async.__GT_t11824 = (function __GT_t11824(cb__$1,flag__$1,alt_handler__$1,meta11825){return (new cljs.core.async.t11824(cb__$1,flag__$1,alt_handler__$1,meta11825));
});
}
return (new cljs.core.async.t11824(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11827_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11827_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11828_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11828_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3374__auto__ = wport;if(cljs.core.truth_(or__3374__auto__))
{return or__3374__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11829 = (i + 1);
i = G__11829;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3374__auto__ = ret;if(cljs.core.truth_(or__3374__auto__))
{return or__3374__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3362__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3362__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3362__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11830){var map__11832 = p__11830;var map__11832__$1 = ((cljs.core.seq_QMARK_.call(null,map__11832))?cljs.core.apply.call(null,cljs.core.hash_map,map__11832):map__11832);var opts = map__11832__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11830 = null;if (arguments.length > 1) {
  p__11830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11830);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11833){
var ports = cljs.core.first(arglist__11833);
var p__11830 = cljs.core.rest(arglist__11833);
return alts_BANG___delegate(ports,p__11830);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11841 = (function (ch,f,map_LT_,meta11842){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11842 = meta11842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11841.cljs$lang$type = true;
cljs.core.async.t11841.cljs$lang$ctorStr = "cljs.core.async/t11841";
cljs.core.async.t11841.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11841");
});
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11844 = (function (fn1,_,meta11842,ch,f,map_LT_,meta11845){
this.fn1 = fn1;
this._ = _;
this.meta11842 = meta11842;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11844.cljs$lang$type = true;
cljs.core.async.t11844.cljs$lang$ctorStr = "cljs.core.async/t11844";
cljs.core.async.t11844.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11844");
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11834_SHARP_){return f1.call(null,(((p1__11834_SHARP_ == null))?null:self__.f.call(null,p1__11834_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11846){var self__ = this;
var _11846__$1 = this;return self__.meta11845;
});
cljs.core.async.t11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11846,meta11845__$1){var self__ = this;
var _11846__$1 = this;return (new cljs.core.async.t11844(self__.fn1,self__._,self__.meta11842,self__.ch,self__.f,self__.map_LT_,meta11845__$1));
});
cljs.core.async.__GT_t11844 = (function __GT_t11844(fn1__$1,___$2,meta11842__$1,ch__$2,f__$2,map_LT___$2,meta11845){return (new cljs.core.async.t11844(fn1__$1,___$2,meta11842__$1,ch__$2,f__$2,map_LT___$2,meta11845));
});
}
return (new cljs.core.async.t11844(fn1,___$1,self__.meta11842,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3362__auto__ = ret;if(cljs.core.truth_(and__3362__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3362__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11843){var self__ = this;
var _11843__$1 = this;return self__.meta11842;
});
cljs.core.async.t11841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11843,meta11842__$1){var self__ = this;
var _11843__$1 = this;return (new cljs.core.async.t11841(self__.ch,self__.f,self__.map_LT_,meta11842__$1));
});
cljs.core.async.__GT_t11841 = (function __GT_t11841(ch__$1,f__$1,map_LT___$1,meta11842){return (new cljs.core.async.t11841(ch__$1,f__$1,map_LT___$1,meta11842));
});
}
return (new cljs.core.async.t11841(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11850 = (function (ch,f,map_GT_,meta11851){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11851 = meta11851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11850.cljs$lang$type = true;
cljs.core.async.t11850.cljs$lang$ctorStr = "cljs.core.async/t11850";
cljs.core.async.t11850.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11850");
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11852){var self__ = this;
var _11852__$1 = this;return self__.meta11851;
});
cljs.core.async.t11850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11852,meta11851__$1){var self__ = this;
var _11852__$1 = this;return (new cljs.core.async.t11850(self__.ch,self__.f,self__.map_GT_,meta11851__$1));
});
cljs.core.async.__GT_t11850 = (function __GT_t11850(ch__$1,f__$1,map_GT___$1,meta11851){return (new cljs.core.async.t11850(ch__$1,f__$1,map_GT___$1,meta11851));
});
}
return (new cljs.core.async.t11850(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11856 = (function (ch,p,filter_GT_,meta11857){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11857 = meta11857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11856.cljs$lang$type = true;
cljs.core.async.t11856.cljs$lang$ctorStr = "cljs.core.async/t11856";
cljs.core.async.t11856.cljs$lang$ctorPrWriter = (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t11856");
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11858){var self__ = this;
var _11858__$1 = this;return self__.meta11857;
});
cljs.core.async.t11856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11858,meta11857__$1){var self__ = this;
var _11858__$1 = this;return (new cljs.core.async.t11856(self__.ch,self__.p,self__.filter_GT_,meta11857__$1));
});
cljs.core.async.__GT_t11856 = (function __GT_t11856(ch__$1,p__$1,filter_GT___$1,meta11857){return (new cljs.core.async.t11856(ch__$1,p__$1,filter_GT___$1,meta11857));
});
}
return (new cljs.core.async.t11856(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___11941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_11920){var state_val_11921 = (state_11920[1]);if((state_val_11921 === 7))
{var inst_11916 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11922_11942 = state_11920__$1;(statearr_11922_11942[2] = inst_11916);
(statearr_11922_11942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 1))
{var state_11920__$1 = state_11920;var statearr_11923_11943 = state_11920__$1;(statearr_11923_11943[2] = null);
(statearr_11923_11943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 4))
{var inst_11902 = (state_11920[7]);var inst_11902__$1 = (state_11920[2]);var inst_11903 = (inst_11902__$1 == null);var state_11920__$1 = (function (){var statearr_11924 = state_11920;(statearr_11924[7] = inst_11902__$1);
return statearr_11924;
})();if(cljs.core.truth_(inst_11903))
{var statearr_11925_11944 = state_11920__$1;(statearr_11925_11944[1] = 5);
} else
{var statearr_11926_11945 = state_11920__$1;(statearr_11926_11945[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 6))
{var inst_11902 = (state_11920[7]);var inst_11907 = p.call(null,inst_11902);var state_11920__$1 = state_11920;if(cljs.core.truth_(inst_11907))
{var statearr_11927_11946 = state_11920__$1;(statearr_11927_11946[1] = 8);
} else
{var statearr_11928_11947 = state_11920__$1;(statearr_11928_11947[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 3))
{var inst_11918 = (state_11920[2]);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11920__$1,inst_11918);
} else
{if((state_val_11921 === 2))
{var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11920__$1,4,ch);
} else
{if((state_val_11921 === 11))
{var inst_11910 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11929_11948 = state_11920__$1;(statearr_11929_11948[2] = inst_11910);
(statearr_11929_11948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 9))
{var state_11920__$1 = state_11920;var statearr_11930_11949 = state_11920__$1;(statearr_11930_11949[2] = null);
(statearr_11930_11949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 5))
{var inst_11905 = cljs.core.async.close_BANG_.call(null,out);var state_11920__$1 = state_11920;var statearr_11931_11950 = state_11920__$1;(statearr_11931_11950[2] = inst_11905);
(statearr_11931_11950[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 10))
{var inst_11913 = (state_11920[2]);var state_11920__$1 = (function (){var statearr_11932 = state_11920;(statearr_11932[8] = inst_11913);
return statearr_11932;
})();var statearr_11933_11951 = state_11920__$1;(statearr_11933_11951[2] = null);
(statearr_11933_11951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 8))
{var inst_11902 = (state_11920[7]);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11920__$1,11,out,inst_11902);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_11937 = (new Array(9));(statearr_11937[0] = state_machine__8091__auto__);
(statearr_11937[1] = 1);
return statearr_11937;
});
var state_machine__8091__auto____1 = (function (state_11920){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_11920);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e11938){if((e11938 instanceof Object))
{var ex__8094__auto__ = e11938;var statearr_11939_11952 = state_11920;(statearr_11939_11952[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11953 = state_11920;
state_11920 = G__11953;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_11920){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_11920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_11940 = f__8167__auto__.call(null);(statearr_11940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___11941);
return statearr_11940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12119){var state_val_12120 = (state_12119[1]);if((state_val_12120 === 7))
{var inst_12115 = (state_12119[2]);var state_12119__$1 = state_12119;var statearr_12121_12162 = state_12119__$1;(statearr_12121_12162[2] = inst_12115);
(statearr_12121_12162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 20))
{var inst_12085 = (state_12119[7]);var inst_12096 = (state_12119[2]);var inst_12097 = cljs.core.next.call(null,inst_12085);var inst_12071 = inst_12097;var inst_12072 = null;var inst_12073 = 0;var inst_12074 = 0;var state_12119__$1 = (function (){var statearr_12122 = state_12119;(statearr_12122[8] = inst_12096);
(statearr_12122[9] = inst_12073);
(statearr_12122[10] = inst_12074);
(statearr_12122[11] = inst_12071);
(statearr_12122[12] = inst_12072);
return statearr_12122;
})();var statearr_12123_12163 = state_12119__$1;(statearr_12123_12163[2] = null);
(statearr_12123_12163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 1))
{var state_12119__$1 = state_12119;var statearr_12124_12164 = state_12119__$1;(statearr_12124_12164[2] = null);
(statearr_12124_12164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 4))
{var inst_12060 = (state_12119[13]);var inst_12060__$1 = (state_12119[2]);var inst_12061 = (inst_12060__$1 == null);var state_12119__$1 = (function (){var statearr_12125 = state_12119;(statearr_12125[13] = inst_12060__$1);
return statearr_12125;
})();if(cljs.core.truth_(inst_12061))
{var statearr_12126_12165 = state_12119__$1;(statearr_12126_12165[1] = 5);
} else
{var statearr_12127_12166 = state_12119__$1;(statearr_12127_12166[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 15))
{var state_12119__$1 = state_12119;var statearr_12131_12167 = state_12119__$1;(statearr_12131_12167[2] = null);
(statearr_12131_12167[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 21))
{var state_12119__$1 = state_12119;var statearr_12132_12168 = state_12119__$1;(statearr_12132_12168[2] = null);
(statearr_12132_12168[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 13))
{var inst_12073 = (state_12119[9]);var inst_12074 = (state_12119[10]);var inst_12071 = (state_12119[11]);var inst_12072 = (state_12119[12]);var inst_12081 = (state_12119[2]);var inst_12082 = (inst_12074 + 1);var tmp12128 = inst_12073;var tmp12129 = inst_12071;var tmp12130 = inst_12072;var inst_12071__$1 = tmp12129;var inst_12072__$1 = tmp12130;var inst_12073__$1 = tmp12128;var inst_12074__$1 = inst_12082;var state_12119__$1 = (function (){var statearr_12133 = state_12119;(statearr_12133[14] = inst_12081);
(statearr_12133[9] = inst_12073__$1);
(statearr_12133[10] = inst_12074__$1);
(statearr_12133[11] = inst_12071__$1);
(statearr_12133[12] = inst_12072__$1);
return statearr_12133;
})();var statearr_12134_12169 = state_12119__$1;(statearr_12134_12169[2] = null);
(statearr_12134_12169[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 22))
{var state_12119__$1 = state_12119;var statearr_12135_12170 = state_12119__$1;(statearr_12135_12170[2] = null);
(statearr_12135_12170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 6))
{var inst_12060 = (state_12119[13]);var inst_12069 = f.call(null,inst_12060);var inst_12070 = cljs.core.seq.call(null,inst_12069);var inst_12071 = inst_12070;var inst_12072 = null;var inst_12073 = 0;var inst_12074 = 0;var state_12119__$1 = (function (){var statearr_12136 = state_12119;(statearr_12136[9] = inst_12073);
(statearr_12136[10] = inst_12074);
(statearr_12136[11] = inst_12071);
(statearr_12136[12] = inst_12072);
return statearr_12136;
})();var statearr_12137_12171 = state_12119__$1;(statearr_12137_12171[2] = null);
(statearr_12137_12171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 17))
{var inst_12085 = (state_12119[7]);var inst_12089 = cljs.core.chunk_first.call(null,inst_12085);var inst_12090 = cljs.core.chunk_rest.call(null,inst_12085);var inst_12091 = cljs.core.count.call(null,inst_12089);var inst_12071 = inst_12090;var inst_12072 = inst_12089;var inst_12073 = inst_12091;var inst_12074 = 0;var state_12119__$1 = (function (){var statearr_12138 = state_12119;(statearr_12138[9] = inst_12073);
(statearr_12138[10] = inst_12074);
(statearr_12138[11] = inst_12071);
(statearr_12138[12] = inst_12072);
return statearr_12138;
})();var statearr_12139_12172 = state_12119__$1;(statearr_12139_12172[2] = null);
(statearr_12139_12172[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 3))
{var inst_12117 = (state_12119[2]);var state_12119__$1 = state_12119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12119__$1,inst_12117);
} else
{if((state_val_12120 === 12))
{var inst_12105 = (state_12119[2]);var state_12119__$1 = state_12119;var statearr_12140_12173 = state_12119__$1;(statearr_12140_12173[2] = inst_12105);
(statearr_12140_12173[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 2))
{var state_12119__$1 = state_12119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12119__$1,4,in$);
} else
{if((state_val_12120 === 23))
{var inst_12113 = (state_12119[2]);var state_12119__$1 = state_12119;var statearr_12141_12174 = state_12119__$1;(statearr_12141_12174[2] = inst_12113);
(statearr_12141_12174[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 19))
{var inst_12100 = (state_12119[2]);var state_12119__$1 = state_12119;var statearr_12142_12175 = state_12119__$1;(statearr_12142_12175[2] = inst_12100);
(statearr_12142_12175[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 11))
{var inst_12071 = (state_12119[11]);var inst_12085 = (state_12119[7]);var inst_12085__$1 = cljs.core.seq.call(null,inst_12071);var state_12119__$1 = (function (){var statearr_12143 = state_12119;(statearr_12143[7] = inst_12085__$1);
return statearr_12143;
})();if(inst_12085__$1)
{var statearr_12144_12176 = state_12119__$1;(statearr_12144_12176[1] = 14);
} else
{var statearr_12145_12177 = state_12119__$1;(statearr_12145_12177[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 9))
{var inst_12107 = (state_12119[2]);var inst_12108 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12119__$1 = (function (){var statearr_12146 = state_12119;(statearr_12146[15] = inst_12107);
return statearr_12146;
})();if(cljs.core.truth_(inst_12108))
{var statearr_12147_12178 = state_12119__$1;(statearr_12147_12178[1] = 21);
} else
{var statearr_12148_12179 = state_12119__$1;(statearr_12148_12179[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 5))
{var inst_12063 = cljs.core.async.close_BANG_.call(null,out);var state_12119__$1 = state_12119;var statearr_12149_12180 = state_12119__$1;(statearr_12149_12180[2] = inst_12063);
(statearr_12149_12180[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 14))
{var inst_12085 = (state_12119[7]);var inst_12087 = cljs.core.chunked_seq_QMARK_.call(null,inst_12085);var state_12119__$1 = state_12119;if(inst_12087)
{var statearr_12150_12181 = state_12119__$1;(statearr_12150_12181[1] = 17);
} else
{var statearr_12151_12182 = state_12119__$1;(statearr_12151_12182[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 16))
{var inst_12103 = (state_12119[2]);var state_12119__$1 = state_12119;var statearr_12152_12183 = state_12119__$1;(statearr_12152_12183[2] = inst_12103);
(statearr_12152_12183[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12120 === 10))
{var inst_12074 = (state_12119[10]);var inst_12072 = (state_12119[12]);var inst_12079 = cljs.core._nth.call(null,inst_12072,inst_12074);var state_12119__$1 = state_12119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12119__$1,13,out,inst_12079);
} else
{if((state_val_12120 === 18))
{var inst_12085 = (state_12119[7]);var inst_12094 = cljs.core.first.call(null,inst_12085);var state_12119__$1 = state_12119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12119__$1,20,out,inst_12094);
} else
{if((state_val_12120 === 8))
{var inst_12073 = (state_12119[9]);var inst_12074 = (state_12119[10]);var inst_12076 = (inst_12074 < inst_12073);var inst_12077 = inst_12076;var state_12119__$1 = state_12119;if(cljs.core.truth_(inst_12077))
{var statearr_12153_12184 = state_12119__$1;(statearr_12153_12184[1] = 10);
} else
{var statearr_12154_12185 = state_12119__$1;(statearr_12154_12185[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_12158 = (new Array(16));(statearr_12158[0] = state_machine__8091__auto__);
(statearr_12158[1] = 1);
return statearr_12158;
});
var state_machine__8091__auto____1 = (function (state_12119){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12119);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e12159){if((e12159 instanceof Object))
{var ex__8094__auto__ = e12159;var statearr_12160_12186 = state_12119;(statearr_12160_12186[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12187 = state_12119;
state_12119 = G__12187;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12119){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_12161 = f__8167__auto__.call(null);(statearr_12161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto__);
return statearr_12161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return c__8166__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8166__auto___12282 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12258){var state_val_12259 = (state_12258[1]);if((state_val_12259 === 7))
{var inst_12254 = (state_12258[2]);var state_12258__$1 = state_12258;var statearr_12260_12283 = state_12258__$1;(statearr_12260_12283[2] = inst_12254);
(statearr_12260_12283[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 1))
{var state_12258__$1 = state_12258;var statearr_12261_12284 = state_12258__$1;(statearr_12261_12284[2] = null);
(statearr_12261_12284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 4))
{var inst_12237 = (state_12258[7]);var inst_12237__$1 = (state_12258[2]);var inst_12238 = (inst_12237__$1 == null);var state_12258__$1 = (function (){var statearr_12262 = state_12258;(statearr_12262[7] = inst_12237__$1);
return statearr_12262;
})();if(cljs.core.truth_(inst_12238))
{var statearr_12263_12285 = state_12258__$1;(statearr_12263_12285[1] = 5);
} else
{var statearr_12264_12286 = state_12258__$1;(statearr_12264_12286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 13))
{var state_12258__$1 = state_12258;var statearr_12265_12287 = state_12258__$1;(statearr_12265_12287[2] = null);
(statearr_12265_12287[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 6))
{var inst_12237 = (state_12258[7]);var state_12258__$1 = state_12258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12258__$1,11,to,inst_12237);
} else
{if((state_val_12259 === 3))
{var inst_12256 = (state_12258[2]);var state_12258__$1 = state_12258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12258__$1,inst_12256);
} else
{if((state_val_12259 === 12))
{var state_12258__$1 = state_12258;var statearr_12266_12288 = state_12258__$1;(statearr_12266_12288[2] = null);
(statearr_12266_12288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 2))
{var state_12258__$1 = state_12258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12258__$1,4,from);
} else
{if((state_val_12259 === 11))
{var inst_12247 = (state_12258[2]);var state_12258__$1 = state_12258;if(cljs.core.truth_(inst_12247))
{var statearr_12267_12289 = state_12258__$1;(statearr_12267_12289[1] = 12);
} else
{var statearr_12268_12290 = state_12258__$1;(statearr_12268_12290[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 9))
{var state_12258__$1 = state_12258;var statearr_12269_12291 = state_12258__$1;(statearr_12269_12291[2] = null);
(statearr_12269_12291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 5))
{var state_12258__$1 = state_12258;if(cljs.core.truth_(close_QMARK_))
{var statearr_12270_12292 = state_12258__$1;(statearr_12270_12292[1] = 8);
} else
{var statearr_12271_12293 = state_12258__$1;(statearr_12271_12293[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 14))
{var inst_12252 = (state_12258[2]);var state_12258__$1 = state_12258;var statearr_12272_12294 = state_12258__$1;(statearr_12272_12294[2] = inst_12252);
(statearr_12272_12294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 10))
{var inst_12244 = (state_12258[2]);var state_12258__$1 = state_12258;var statearr_12273_12295 = state_12258__$1;(statearr_12273_12295[2] = inst_12244);
(statearr_12273_12295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12259 === 8))
{var inst_12241 = cljs.core.async.close_BANG_.call(null,to);var state_12258__$1 = state_12258;var statearr_12274_12296 = state_12258__$1;(statearr_12274_12296[2] = inst_12241);
(statearr_12274_12296[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_12278 = (new Array(8));(statearr_12278[0] = state_machine__8091__auto__);
(statearr_12278[1] = 1);
return statearr_12278;
});
var state_machine__8091__auto____1 = (function (state_12258){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12258);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e12279){if((e12279 instanceof Object))
{var ex__8094__auto__ = e12279;var statearr_12280_12297 = state_12258;(statearr_12280_12297[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12298 = state_12258;
state_12258 = G__12298;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12258){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_12281 = f__8167__auto__.call(null);(statearr_12281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___12282);
return statearr_12281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8166__auto___12399 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12374){var state_val_12375 = (state_12374[1]);if((state_val_12375 === 7))
{var inst_12370 = (state_12374[2]);var state_12374__$1 = state_12374;var statearr_12376_12400 = state_12374__$1;(statearr_12376_12400[2] = inst_12370);
(statearr_12376_12400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 1))
{var state_12374__$1 = state_12374;var statearr_12377_12401 = state_12374__$1;(statearr_12377_12401[2] = null);
(statearr_12377_12401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 4))
{var inst_12351 = (state_12374[7]);var inst_12351__$1 = (state_12374[2]);var inst_12352 = (inst_12351__$1 == null);var state_12374__$1 = (function (){var statearr_12378 = state_12374;(statearr_12378[7] = inst_12351__$1);
return statearr_12378;
})();if(cljs.core.truth_(inst_12352))
{var statearr_12379_12402 = state_12374__$1;(statearr_12379_12402[1] = 5);
} else
{var statearr_12380_12403 = state_12374__$1;(statearr_12380_12403[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 13))
{var state_12374__$1 = state_12374;var statearr_12381_12404 = state_12374__$1;(statearr_12381_12404[2] = null);
(statearr_12381_12404[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 6))
{var inst_12351 = (state_12374[7]);var inst_12357 = p.call(null,inst_12351);var state_12374__$1 = state_12374;if(cljs.core.truth_(inst_12357))
{var statearr_12382_12405 = state_12374__$1;(statearr_12382_12405[1] = 9);
} else
{var statearr_12383_12406 = state_12374__$1;(statearr_12383_12406[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 3))
{var inst_12372 = (state_12374[2]);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12374__$1,inst_12372);
} else
{if((state_val_12375 === 12))
{var state_12374__$1 = state_12374;var statearr_12384_12407 = state_12374__$1;(statearr_12384_12407[2] = null);
(statearr_12384_12407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 2))
{var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12374__$1,4,ch);
} else
{if((state_val_12375 === 11))
{var inst_12351 = (state_12374[7]);var inst_12361 = (state_12374[2]);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12374__$1,8,inst_12361,inst_12351);
} else
{if((state_val_12375 === 9))
{var state_12374__$1 = state_12374;var statearr_12385_12408 = state_12374__$1;(statearr_12385_12408[2] = tc);
(statearr_12385_12408[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 5))
{var inst_12354 = cljs.core.async.close_BANG_.call(null,tc);var inst_12355 = cljs.core.async.close_BANG_.call(null,fc);var state_12374__$1 = (function (){var statearr_12386 = state_12374;(statearr_12386[8] = inst_12354);
return statearr_12386;
})();var statearr_12387_12409 = state_12374__$1;(statearr_12387_12409[2] = inst_12355);
(statearr_12387_12409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 14))
{var inst_12368 = (state_12374[2]);var state_12374__$1 = state_12374;var statearr_12388_12410 = state_12374__$1;(statearr_12388_12410[2] = inst_12368);
(statearr_12388_12410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 10))
{var state_12374__$1 = state_12374;var statearr_12389_12411 = state_12374__$1;(statearr_12389_12411[2] = fc);
(statearr_12389_12411[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 8))
{var inst_12363 = (state_12374[2]);var state_12374__$1 = state_12374;if(cljs.core.truth_(inst_12363))
{var statearr_12390_12412 = state_12374__$1;(statearr_12390_12412[1] = 12);
} else
{var statearr_12391_12413 = state_12374__$1;(statearr_12391_12413[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_12395 = (new Array(9));(statearr_12395[0] = state_machine__8091__auto__);
(statearr_12395[1] = 1);
return statearr_12395;
});
var state_machine__8091__auto____1 = (function (state_12374){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12374);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e12396){if((e12396 instanceof Object))
{var ex__8094__auto__ = e12396;var statearr_12397_12414 = state_12374;(statearr_12397_12414[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12415 = state_12374;
state_12374 = G__12415;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_12398 = f__8167__auto__.call(null);(statearr_12398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___12399);
return statearr_12398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12462){var state_val_12463 = (state_12462[1]);if((state_val_12463 === 7))
{var inst_12458 = (state_12462[2]);var state_12462__$1 = state_12462;var statearr_12464_12480 = state_12462__$1;(statearr_12464_12480[2] = inst_12458);
(statearr_12464_12480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12463 === 6))
{var inst_12451 = (state_12462[7]);var inst_12448 = (state_12462[8]);var inst_12455 = f.call(null,inst_12448,inst_12451);var inst_12448__$1 = inst_12455;var state_12462__$1 = (function (){var statearr_12465 = state_12462;(statearr_12465[8] = inst_12448__$1);
return statearr_12465;
})();var statearr_12466_12481 = state_12462__$1;(statearr_12466_12481[2] = null);
(statearr_12466_12481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12463 === 5))
{var inst_12448 = (state_12462[8]);var state_12462__$1 = state_12462;var statearr_12467_12482 = state_12462__$1;(statearr_12467_12482[2] = inst_12448);
(statearr_12467_12482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12463 === 4))
{var inst_12451 = (state_12462[7]);var inst_12451__$1 = (state_12462[2]);var inst_12452 = (inst_12451__$1 == null);var state_12462__$1 = (function (){var statearr_12468 = state_12462;(statearr_12468[7] = inst_12451__$1);
return statearr_12468;
})();if(cljs.core.truth_(inst_12452))
{var statearr_12469_12483 = state_12462__$1;(statearr_12469_12483[1] = 5);
} else
{var statearr_12470_12484 = state_12462__$1;(statearr_12470_12484[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12463 === 3))
{var inst_12460 = (state_12462[2]);var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12462__$1,inst_12460);
} else
{if((state_val_12463 === 2))
{var state_12462__$1 = state_12462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,4,ch);
} else
{if((state_val_12463 === 1))
{var inst_12448 = init;var state_12462__$1 = (function (){var statearr_12471 = state_12462;(statearr_12471[8] = inst_12448);
return statearr_12471;
})();var statearr_12472_12485 = state_12462__$1;(statearr_12472_12485[2] = null);
(statearr_12472_12485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_12476 = (new Array(9));(statearr_12476[0] = state_machine__8091__auto__);
(statearr_12476[1] = 1);
return statearr_12476;
});
var state_machine__8091__auto____1 = (function (state_12462){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12462);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e12477){if((e12477 instanceof Object))
{var ex__8094__auto__ = e12477;var statearr_12478_12486 = state_12462;(statearr_12478_12486[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12487 = state_12462;
state_12462 = G__12487;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12462){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_12479 = f__8167__auto__.call(null);(statearr_12479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto__);
return statearr_12479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return c__8166__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8166__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12561){var state_val_12562 = (state_12561[1]);if((state_val_12562 === 7))
{var inst_12543 = (state_12561[2]);var state_12561__$1 = state_12561;var statearr_12563_12586 = state_12561__$1;(statearr_12563_12586[2] = inst_12543);
(statearr_12563_12586[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 1))
{var inst_12537 = cljs.core.seq.call(null,coll);var inst_12538 = inst_12537;var state_12561__$1 = (function (){var statearr_12564 = state_12561;(statearr_12564[7] = inst_12538);
return statearr_12564;
})();var statearr_12565_12587 = state_12561__$1;(statearr_12565_12587[2] = null);
(statearr_12565_12587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 4))
{var inst_12538 = (state_12561[7]);var inst_12541 = cljs.core.first.call(null,inst_12538);var state_12561__$1 = state_12561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12561__$1,7,ch,inst_12541);
} else
{if((state_val_12562 === 13))
{var inst_12555 = (state_12561[2]);var state_12561__$1 = state_12561;var statearr_12566_12588 = state_12561__$1;(statearr_12566_12588[2] = inst_12555);
(statearr_12566_12588[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 6))
{var inst_12546 = (state_12561[2]);var state_12561__$1 = state_12561;if(cljs.core.truth_(inst_12546))
{var statearr_12567_12589 = state_12561__$1;(statearr_12567_12589[1] = 8);
} else
{var statearr_12568_12590 = state_12561__$1;(statearr_12568_12590[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 3))
{var inst_12559 = (state_12561[2]);var state_12561__$1 = state_12561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12561__$1,inst_12559);
} else
{if((state_val_12562 === 12))
{var state_12561__$1 = state_12561;var statearr_12569_12591 = state_12561__$1;(statearr_12569_12591[2] = null);
(statearr_12569_12591[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 2))
{var inst_12538 = (state_12561[7]);var state_12561__$1 = state_12561;if(cljs.core.truth_(inst_12538))
{var statearr_12570_12592 = state_12561__$1;(statearr_12570_12592[1] = 4);
} else
{var statearr_12571_12593 = state_12561__$1;(statearr_12571_12593[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 11))
{var inst_12552 = cljs.core.async.close_BANG_.call(null,ch);var state_12561__$1 = state_12561;var statearr_12572_12594 = state_12561__$1;(statearr_12572_12594[2] = inst_12552);
(statearr_12572_12594[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 9))
{var state_12561__$1 = state_12561;if(cljs.core.truth_(close_QMARK_))
{var statearr_12573_12595 = state_12561__$1;(statearr_12573_12595[1] = 11);
} else
{var statearr_12574_12596 = state_12561__$1;(statearr_12574_12596[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 5))
{var inst_12538 = (state_12561[7]);var state_12561__$1 = state_12561;var statearr_12575_12597 = state_12561__$1;(statearr_12575_12597[2] = inst_12538);
(statearr_12575_12597[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 10))
{var inst_12557 = (state_12561[2]);var state_12561__$1 = state_12561;var statearr_12576_12598 = state_12561__$1;(statearr_12576_12598[2] = inst_12557);
(statearr_12576_12598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12562 === 8))
{var inst_12538 = (state_12561[7]);var inst_12548 = cljs.core.next.call(null,inst_12538);var inst_12538__$1 = inst_12548;var state_12561__$1 = (function (){var statearr_12577 = state_12561;(statearr_12577[7] = inst_12538__$1);
return statearr_12577;
})();var statearr_12578_12599 = state_12561__$1;(statearr_12578_12599[2] = null);
(statearr_12578_12599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_12582 = (new Array(8));(statearr_12582[0] = state_machine__8091__auto__);
(statearr_12582[1] = 1);
return statearr_12582;
});
var state_machine__8091__auto____1 = (function (state_12561){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12561);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e12583){if((e12583 instanceof Object))
{var ex__8094__auto__ = e12583;var statearr_12584_12600 = state_12561;(statearr_12584_12600[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12601 = state_12561;
state_12561 = G__12601;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12561){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_12585 = f__8167__auto__.call(null);(statearr_12585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto__);
return statearr_12585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return c__8166__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12603 = {};return obj12603;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3362__auto__ = _;if(and__3362__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3362__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3972__auto__ = (((_ == null))?null:_);return (function (){var or__3374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12605 = {};return obj12605;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12827 = (function (cs,ch,mult,meta12828){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12828 = meta12828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12827.cljs$lang$type = true;
cljs.core.async.t12827.cljs$lang$ctorStr = "cljs.core.async/t12827";
cljs.core.async.t12827.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t12827");
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12827.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12829){var self__ = this;
var _12829__$1 = this;return self__.meta12828;
});})(cs))
;
cljs.core.async.t12827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12829,meta12828__$1){var self__ = this;
var _12829__$1 = this;return (new cljs.core.async.t12827(self__.cs,self__.ch,self__.mult,meta12828__$1));
});})(cs))
;
cljs.core.async.__GT_t12827 = ((function (cs){
return (function __GT_t12827(cs__$1,ch__$1,mult__$1,meta12828){return (new cljs.core.async.t12827(cs__$1,ch__$1,mult__$1,meta12828));
});})(cs))
;
}
return (new cljs.core.async.t12827(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8166__auto___13048 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_12960){var state_val_12961 = (state_12960[1]);if((state_val_12961 === 7))
{var inst_12956 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_12962_13049 = state_12960__$1;(statearr_12962_13049[2] = inst_12956);
(statearr_12962_13049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 20))
{var inst_12861 = (state_12960[7]);var inst_12871 = cljs.core.first.call(null,inst_12861);var inst_12872 = cljs.core.nth.call(null,inst_12871,0,null);var inst_12873 = cljs.core.nth.call(null,inst_12871,1,null);var state_12960__$1 = (function (){var statearr_12963 = state_12960;(statearr_12963[8] = inst_12872);
return statearr_12963;
})();if(cljs.core.truth_(inst_12873))
{var statearr_12964_13050 = state_12960__$1;(statearr_12964_13050[1] = 22);
} else
{var statearr_12965_13051 = state_12960__$1;(statearr_12965_13051[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 27))
{var inst_12832 = (state_12960[9]);var inst_12903 = (state_12960[10]);var inst_12901 = (state_12960[11]);var inst_12908 = (state_12960[12]);var inst_12908__$1 = cljs.core._nth.call(null,inst_12901,inst_12903);var inst_12909 = cljs.core.async.put_BANG_.call(null,inst_12908__$1,inst_12832,done);var state_12960__$1 = (function (){var statearr_12966 = state_12960;(statearr_12966[12] = inst_12908__$1);
return statearr_12966;
})();if(cljs.core.truth_(inst_12909))
{var statearr_12967_13052 = state_12960__$1;(statearr_12967_13052[1] = 30);
} else
{var statearr_12968_13053 = state_12960__$1;(statearr_12968_13053[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 1))
{var state_12960__$1 = state_12960;var statearr_12969_13054 = state_12960__$1;(statearr_12969_13054[2] = null);
(statearr_12969_13054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 24))
{var inst_12861 = (state_12960[7]);var inst_12878 = (state_12960[2]);var inst_12879 = cljs.core.next.call(null,inst_12861);var inst_12841 = inst_12879;var inst_12842 = null;var inst_12843 = 0;var inst_12844 = 0;var state_12960__$1 = (function (){var statearr_12970 = state_12960;(statearr_12970[13] = inst_12878);
(statearr_12970[14] = inst_12841);
(statearr_12970[15] = inst_12844);
(statearr_12970[16] = inst_12843);
(statearr_12970[17] = inst_12842);
return statearr_12970;
})();var statearr_12971_13055 = state_12960__$1;(statearr_12971_13055[2] = null);
(statearr_12971_13055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 39))
{var state_12960__$1 = state_12960;var statearr_12975_13056 = state_12960__$1;(statearr_12975_13056[2] = null);
(statearr_12975_13056[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 4))
{var inst_12832 = (state_12960[9]);var inst_12832__$1 = (state_12960[2]);var inst_12833 = (inst_12832__$1 == null);var state_12960__$1 = (function (){var statearr_12976 = state_12960;(statearr_12976[9] = inst_12832__$1);
return statearr_12976;
})();if(cljs.core.truth_(inst_12833))
{var statearr_12977_13057 = state_12960__$1;(statearr_12977_13057[1] = 5);
} else
{var statearr_12978_13058 = state_12960__$1;(statearr_12978_13058[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 15))
{var inst_12841 = (state_12960[14]);var inst_12844 = (state_12960[15]);var inst_12843 = (state_12960[16]);var inst_12842 = (state_12960[17]);var inst_12857 = (state_12960[2]);var inst_12858 = (inst_12844 + 1);var tmp12972 = inst_12841;var tmp12973 = inst_12843;var tmp12974 = inst_12842;var inst_12841__$1 = tmp12972;var inst_12842__$1 = tmp12974;var inst_12843__$1 = tmp12973;var inst_12844__$1 = inst_12858;var state_12960__$1 = (function (){var statearr_12979 = state_12960;(statearr_12979[18] = inst_12857);
(statearr_12979[14] = inst_12841__$1);
(statearr_12979[15] = inst_12844__$1);
(statearr_12979[16] = inst_12843__$1);
(statearr_12979[17] = inst_12842__$1);
return statearr_12979;
})();var statearr_12980_13059 = state_12960__$1;(statearr_12980_13059[2] = null);
(statearr_12980_13059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 21))
{var inst_12882 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_12984_13060 = state_12960__$1;(statearr_12984_13060[2] = inst_12882);
(statearr_12984_13060[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 31))
{var inst_12908 = (state_12960[12]);var inst_12912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12913 = cljs.core.async.untap_STAR_.call(null,m,inst_12908);var state_12960__$1 = (function (){var statearr_12985 = state_12960;(statearr_12985[19] = inst_12912);
return statearr_12985;
})();var statearr_12986_13061 = state_12960__$1;(statearr_12986_13061[2] = inst_12913);
(statearr_12986_13061[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 32))
{var inst_12900 = (state_12960[20]);var inst_12903 = (state_12960[10]);var inst_12901 = (state_12960[11]);var inst_12902 = (state_12960[21]);var inst_12915 = (state_12960[2]);var inst_12916 = (inst_12903 + 1);var tmp12981 = inst_12900;var tmp12982 = inst_12901;var tmp12983 = inst_12902;var inst_12900__$1 = tmp12981;var inst_12901__$1 = tmp12982;var inst_12902__$1 = tmp12983;var inst_12903__$1 = inst_12916;var state_12960__$1 = (function (){var statearr_12987 = state_12960;(statearr_12987[20] = inst_12900__$1);
(statearr_12987[22] = inst_12915);
(statearr_12987[10] = inst_12903__$1);
(statearr_12987[11] = inst_12901__$1);
(statearr_12987[21] = inst_12902__$1);
return statearr_12987;
})();var statearr_12988_13062 = state_12960__$1;(statearr_12988_13062[2] = null);
(statearr_12988_13062[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 40))
{var inst_12928 = (state_12960[23]);var inst_12932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12933 = cljs.core.async.untap_STAR_.call(null,m,inst_12928);var state_12960__$1 = (function (){var statearr_12989 = state_12960;(statearr_12989[24] = inst_12932);
return statearr_12989;
})();var statearr_12990_13063 = state_12960__$1;(statearr_12990_13063[2] = inst_12933);
(statearr_12990_13063[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 33))
{var inst_12919 = (state_12960[25]);var inst_12921 = cljs.core.chunked_seq_QMARK_.call(null,inst_12919);var state_12960__$1 = state_12960;if(inst_12921)
{var statearr_12991_13064 = state_12960__$1;(statearr_12991_13064[1] = 36);
} else
{var statearr_12992_13065 = state_12960__$1;(statearr_12992_13065[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 13))
{var inst_12851 = (state_12960[26]);var inst_12854 = cljs.core.async.close_BANG_.call(null,inst_12851);var state_12960__$1 = state_12960;var statearr_12993_13066 = state_12960__$1;(statearr_12993_13066[2] = inst_12854);
(statearr_12993_13066[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 22))
{var inst_12872 = (state_12960[8]);var inst_12875 = cljs.core.async.close_BANG_.call(null,inst_12872);var state_12960__$1 = state_12960;var statearr_12994_13067 = state_12960__$1;(statearr_12994_13067[2] = inst_12875);
(statearr_12994_13067[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 36))
{var inst_12919 = (state_12960[25]);var inst_12923 = cljs.core.chunk_first.call(null,inst_12919);var inst_12924 = cljs.core.chunk_rest.call(null,inst_12919);var inst_12925 = cljs.core.count.call(null,inst_12923);var inst_12900 = inst_12924;var inst_12901 = inst_12923;var inst_12902 = inst_12925;var inst_12903 = 0;var state_12960__$1 = (function (){var statearr_12995 = state_12960;(statearr_12995[20] = inst_12900);
(statearr_12995[10] = inst_12903);
(statearr_12995[11] = inst_12901);
(statearr_12995[21] = inst_12902);
return statearr_12995;
})();var statearr_12996_13068 = state_12960__$1;(statearr_12996_13068[2] = null);
(statearr_12996_13068[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 41))
{var inst_12919 = (state_12960[25]);var inst_12935 = (state_12960[2]);var inst_12936 = cljs.core.next.call(null,inst_12919);var inst_12900 = inst_12936;var inst_12901 = null;var inst_12902 = 0;var inst_12903 = 0;var state_12960__$1 = (function (){var statearr_12997 = state_12960;(statearr_12997[20] = inst_12900);
(statearr_12997[10] = inst_12903);
(statearr_12997[27] = inst_12935);
(statearr_12997[11] = inst_12901);
(statearr_12997[21] = inst_12902);
return statearr_12997;
})();var statearr_12998_13069 = state_12960__$1;(statearr_12998_13069[2] = null);
(statearr_12998_13069[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 43))
{var state_12960__$1 = state_12960;var statearr_12999_13070 = state_12960__$1;(statearr_12999_13070[2] = null);
(statearr_12999_13070[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 29))
{var inst_12944 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13000_13071 = state_12960__$1;(statearr_13000_13071[2] = inst_12944);
(statearr_13000_13071[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 44))
{var inst_12953 = (state_12960[2]);var state_12960__$1 = (function (){var statearr_13001 = state_12960;(statearr_13001[28] = inst_12953);
return statearr_13001;
})();var statearr_13002_13072 = state_12960__$1;(statearr_13002_13072[2] = null);
(statearr_13002_13072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 6))
{var inst_12892 = (state_12960[29]);var inst_12891 = cljs.core.deref.call(null,cs);var inst_12892__$1 = cljs.core.keys.call(null,inst_12891);var inst_12893 = cljs.core.count.call(null,inst_12892__$1);var inst_12894 = cljs.core.reset_BANG_.call(null,dctr,inst_12893);var inst_12899 = cljs.core.seq.call(null,inst_12892__$1);var inst_12900 = inst_12899;var inst_12901 = null;var inst_12902 = 0;var inst_12903 = 0;var state_12960__$1 = (function (){var statearr_13003 = state_12960;(statearr_13003[20] = inst_12900);
(statearr_13003[29] = inst_12892__$1);
(statearr_13003[10] = inst_12903);
(statearr_13003[30] = inst_12894);
(statearr_13003[11] = inst_12901);
(statearr_13003[21] = inst_12902);
return statearr_13003;
})();var statearr_13004_13073 = state_12960__$1;(statearr_13004_13073[2] = null);
(statearr_13004_13073[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 28))
{var inst_12900 = (state_12960[20]);var inst_12919 = (state_12960[25]);var inst_12919__$1 = cljs.core.seq.call(null,inst_12900);var state_12960__$1 = (function (){var statearr_13005 = state_12960;(statearr_13005[25] = inst_12919__$1);
return statearr_13005;
})();if(inst_12919__$1)
{var statearr_13006_13074 = state_12960__$1;(statearr_13006_13074[1] = 33);
} else
{var statearr_13007_13075 = state_12960__$1;(statearr_13007_13075[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 25))
{var inst_12903 = (state_12960[10]);var inst_12902 = (state_12960[21]);var inst_12905 = (inst_12903 < inst_12902);var inst_12906 = inst_12905;var state_12960__$1 = state_12960;if(cljs.core.truth_(inst_12906))
{var statearr_13008_13076 = state_12960__$1;(statearr_13008_13076[1] = 27);
} else
{var statearr_13009_13077 = state_12960__$1;(statearr_13009_13077[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 34))
{var state_12960__$1 = state_12960;var statearr_13010_13078 = state_12960__$1;(statearr_13010_13078[2] = null);
(statearr_13010_13078[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 17))
{var state_12960__$1 = state_12960;var statearr_13011_13079 = state_12960__$1;(statearr_13011_13079[2] = null);
(statearr_13011_13079[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 3))
{var inst_12958 = (state_12960[2]);var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12960__$1,inst_12958);
} else
{if((state_val_12961 === 12))
{var inst_12887 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13012_13080 = state_12960__$1;(statearr_13012_13080[2] = inst_12887);
(statearr_13012_13080[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 2))
{var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12960__$1,4,ch);
} else
{if((state_val_12961 === 23))
{var state_12960__$1 = state_12960;var statearr_13013_13081 = state_12960__$1;(statearr_13013_13081[2] = null);
(statearr_13013_13081[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 35))
{var inst_12942 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13014_13082 = state_12960__$1;(statearr_13014_13082[2] = inst_12942);
(statearr_13014_13082[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 19))
{var inst_12861 = (state_12960[7]);var inst_12865 = cljs.core.chunk_first.call(null,inst_12861);var inst_12866 = cljs.core.chunk_rest.call(null,inst_12861);var inst_12867 = cljs.core.count.call(null,inst_12865);var inst_12841 = inst_12866;var inst_12842 = inst_12865;var inst_12843 = inst_12867;var inst_12844 = 0;var state_12960__$1 = (function (){var statearr_13015 = state_12960;(statearr_13015[14] = inst_12841);
(statearr_13015[15] = inst_12844);
(statearr_13015[16] = inst_12843);
(statearr_13015[17] = inst_12842);
return statearr_13015;
})();var statearr_13016_13083 = state_12960__$1;(statearr_13016_13083[2] = null);
(statearr_13016_13083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 11))
{var inst_12861 = (state_12960[7]);var inst_12841 = (state_12960[14]);var inst_12861__$1 = cljs.core.seq.call(null,inst_12841);var state_12960__$1 = (function (){var statearr_13017 = state_12960;(statearr_13017[7] = inst_12861__$1);
return statearr_13017;
})();if(inst_12861__$1)
{var statearr_13018_13084 = state_12960__$1;(statearr_13018_13084[1] = 16);
} else
{var statearr_13019_13085 = state_12960__$1;(statearr_13019_13085[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 9))
{var inst_12889 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13020_13086 = state_12960__$1;(statearr_13020_13086[2] = inst_12889);
(statearr_13020_13086[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 5))
{var inst_12839 = cljs.core.deref.call(null,cs);var inst_12840 = cljs.core.seq.call(null,inst_12839);var inst_12841 = inst_12840;var inst_12842 = null;var inst_12843 = 0;var inst_12844 = 0;var state_12960__$1 = (function (){var statearr_13021 = state_12960;(statearr_13021[14] = inst_12841);
(statearr_13021[15] = inst_12844);
(statearr_13021[16] = inst_12843);
(statearr_13021[17] = inst_12842);
return statearr_13021;
})();var statearr_13022_13087 = state_12960__$1;(statearr_13022_13087[2] = null);
(statearr_13022_13087[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 14))
{var state_12960__$1 = state_12960;var statearr_13023_13088 = state_12960__$1;(statearr_13023_13088[2] = null);
(statearr_13023_13088[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 45))
{var inst_12950 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13024_13089 = state_12960__$1;(statearr_13024_13089[2] = inst_12950);
(statearr_13024_13089[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 26))
{var inst_12892 = (state_12960[29]);var inst_12946 = (state_12960[2]);var inst_12947 = cljs.core.seq.call(null,inst_12892);var state_12960__$1 = (function (){var statearr_13025 = state_12960;(statearr_13025[31] = inst_12946);
return statearr_13025;
})();if(inst_12947)
{var statearr_13026_13090 = state_12960__$1;(statearr_13026_13090[1] = 42);
} else
{var statearr_13027_13091 = state_12960__$1;(statearr_13027_13091[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 16))
{var inst_12861 = (state_12960[7]);var inst_12863 = cljs.core.chunked_seq_QMARK_.call(null,inst_12861);var state_12960__$1 = state_12960;if(inst_12863)
{var statearr_13028_13092 = state_12960__$1;(statearr_13028_13092[1] = 19);
} else
{var statearr_13029_13093 = state_12960__$1;(statearr_13029_13093[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 38))
{var inst_12939 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13030_13094 = state_12960__$1;(statearr_13030_13094[2] = inst_12939);
(statearr_13030_13094[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 30))
{var state_12960__$1 = state_12960;var statearr_13031_13095 = state_12960__$1;(statearr_13031_13095[2] = null);
(statearr_13031_13095[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 10))
{var inst_12844 = (state_12960[15]);var inst_12842 = (state_12960[17]);var inst_12850 = cljs.core._nth.call(null,inst_12842,inst_12844);var inst_12851 = cljs.core.nth.call(null,inst_12850,0,null);var inst_12852 = cljs.core.nth.call(null,inst_12850,1,null);var state_12960__$1 = (function (){var statearr_13032 = state_12960;(statearr_13032[26] = inst_12851);
return statearr_13032;
})();if(cljs.core.truth_(inst_12852))
{var statearr_13033_13096 = state_12960__$1;(statearr_13033_13096[1] = 13);
} else
{var statearr_13034_13097 = state_12960__$1;(statearr_13034_13097[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 18))
{var inst_12885 = (state_12960[2]);var state_12960__$1 = state_12960;var statearr_13035_13098 = state_12960__$1;(statearr_13035_13098[2] = inst_12885);
(statearr_13035_13098[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 42))
{var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12960__$1,45,dchan);
} else
{if((state_val_12961 === 37))
{var inst_12928 = (state_12960[23]);var inst_12832 = (state_12960[9]);var inst_12919 = (state_12960[25]);var inst_12928__$1 = cljs.core.first.call(null,inst_12919);var inst_12929 = cljs.core.async.put_BANG_.call(null,inst_12928__$1,inst_12832,done);var state_12960__$1 = (function (){var statearr_13036 = state_12960;(statearr_13036[23] = inst_12928__$1);
return statearr_13036;
})();if(cljs.core.truth_(inst_12929))
{var statearr_13037_13099 = state_12960__$1;(statearr_13037_13099[1] = 39);
} else
{var statearr_13038_13100 = state_12960__$1;(statearr_13038_13100[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12961 === 8))
{var inst_12844 = (state_12960[15]);var inst_12843 = (state_12960[16]);var inst_12846 = (inst_12844 < inst_12843);var inst_12847 = inst_12846;var state_12960__$1 = state_12960;if(cljs.core.truth_(inst_12847))
{var statearr_13039_13101 = state_12960__$1;(statearr_13039_13101[1] = 10);
} else
{var statearr_13040_13102 = state_12960__$1;(statearr_13040_13102[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_13044 = (new Array(32));(statearr_13044[0] = state_machine__8091__auto__);
(statearr_13044[1] = 1);
return statearr_13044;
});
var state_machine__8091__auto____1 = (function (state_12960){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_12960);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e13045){if((e13045 instanceof Object))
{var ex__8094__auto__ = e13045;var statearr_13046_13103 = state_12960;(statearr_13046_13103[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13104 = state_12960;
state_12960 = G__13104;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_13047 = f__8167__auto__.call(null);(statearr_13047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___13048);
return statearr_13047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13106 = {};return obj13106;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3362__auto__ = m;if(and__3362__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3972__auto__ = (((m == null))?null:m);return (function (){var or__3374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13226 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13227){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13227 = meta13227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13226.cljs$lang$type = true;
cljs.core.async.t13226.cljs$lang$ctorStr = "cljs.core.async/t13226";
cljs.core.async.t13226.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t13226");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13228){var self__ = this;
var _13228__$1 = this;return self__.meta13227;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13228,meta13227__$1){var self__ = this;
var _13228__$1 = this;return (new cljs.core.async.t13226(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13227__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13226 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13226(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13227){return (new cljs.core.async.t13226(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13227));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13226(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8166__auto___13345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_13298){var state_val_13299 = (state_13298[1]);if((state_val_13299 === 7))
{var inst_13242 = (state_13298[7]);var inst_13247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13242);var state_13298__$1 = state_13298;var statearr_13300_13346 = state_13298__$1;(statearr_13300_13346[2] = inst_13247);
(statearr_13300_13346[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 20))
{var inst_13257 = (state_13298[8]);var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13298__$1,23,out,inst_13257);
} else
{if((state_val_13299 === 1))
{var inst_13232 = (state_13298[9]);var inst_13232__$1 = calc_state.call(null);var inst_13233 = cljs.core.seq_QMARK_.call(null,inst_13232__$1);var state_13298__$1 = (function (){var statearr_13301 = state_13298;(statearr_13301[9] = inst_13232__$1);
return statearr_13301;
})();if(inst_13233)
{var statearr_13302_13347 = state_13298__$1;(statearr_13302_13347[1] = 2);
} else
{var statearr_13303_13348 = state_13298__$1;(statearr_13303_13348[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 24))
{var inst_13250 = (state_13298[10]);var inst_13242 = inst_13250;var state_13298__$1 = (function (){var statearr_13304 = state_13298;(statearr_13304[7] = inst_13242);
return statearr_13304;
})();var statearr_13305_13349 = state_13298__$1;(statearr_13305_13349[2] = null);
(statearr_13305_13349[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 4))
{var inst_13232 = (state_13298[9]);var inst_13238 = (state_13298[2]);var inst_13239 = cljs.core.get.call(null,inst_13238,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13240 = cljs.core.get.call(null,inst_13238,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13241 = cljs.core.get.call(null,inst_13238,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13242 = inst_13232;var state_13298__$1 = (function (){var statearr_13306 = state_13298;(statearr_13306[11] = inst_13239);
(statearr_13306[12] = inst_13241);
(statearr_13306[13] = inst_13240);
(statearr_13306[7] = inst_13242);
return statearr_13306;
})();var statearr_13307_13350 = state_13298__$1;(statearr_13307_13350[2] = null);
(statearr_13307_13350[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 15))
{var state_13298__$1 = state_13298;var statearr_13308_13351 = state_13298__$1;(statearr_13308_13351[2] = null);
(statearr_13308_13351[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 21))
{var inst_13250 = (state_13298[10]);var inst_13242 = inst_13250;var state_13298__$1 = (function (){var statearr_13309 = state_13298;(statearr_13309[7] = inst_13242);
return statearr_13309;
})();var statearr_13310_13352 = state_13298__$1;(statearr_13310_13352[2] = null);
(statearr_13310_13352[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 13))
{var inst_13294 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13311_13353 = state_13298__$1;(statearr_13311_13353[2] = inst_13294);
(statearr_13311_13353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 22))
{var inst_13292 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13312_13354 = state_13298__$1;(statearr_13312_13354[2] = inst_13292);
(statearr_13312_13354[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 6))
{var inst_13296 = (state_13298[2]);var state_13298__$1 = state_13298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13298__$1,inst_13296);
} else
{if((state_val_13299 === 25))
{var state_13298__$1 = state_13298;var statearr_13313_13355 = state_13298__$1;(statearr_13313_13355[2] = null);
(statearr_13313_13355[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 17))
{var inst_13272 = (state_13298[14]);var state_13298__$1 = state_13298;var statearr_13314_13356 = state_13298__$1;(statearr_13314_13356[2] = inst_13272);
(statearr_13314_13356[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 3))
{var inst_13232 = (state_13298[9]);var state_13298__$1 = state_13298;var statearr_13315_13357 = state_13298__$1;(statearr_13315_13357[2] = inst_13232);
(statearr_13315_13357[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 12))
{var inst_13253 = (state_13298[15]);var inst_13272 = (state_13298[14]);var inst_13258 = (state_13298[16]);var inst_13272__$1 = inst_13253.call(null,inst_13258);var state_13298__$1 = (function (){var statearr_13316 = state_13298;(statearr_13316[14] = inst_13272__$1);
return statearr_13316;
})();if(cljs.core.truth_(inst_13272__$1))
{var statearr_13317_13358 = state_13298__$1;(statearr_13317_13358[1] = 17);
} else
{var statearr_13318_13359 = state_13298__$1;(statearr_13318_13359[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 2))
{var inst_13232 = (state_13298[9]);var inst_13235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13232);var state_13298__$1 = state_13298;var statearr_13319_13360 = state_13298__$1;(statearr_13319_13360[2] = inst_13235);
(statearr_13319_13360[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 23))
{var inst_13283 = (state_13298[2]);var state_13298__$1 = state_13298;if(cljs.core.truth_(inst_13283))
{var statearr_13320_13361 = state_13298__$1;(statearr_13320_13361[1] = 24);
} else
{var statearr_13321_13362 = state_13298__$1;(statearr_13321_13362[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 19))
{var inst_13280 = (state_13298[2]);var state_13298__$1 = state_13298;if(cljs.core.truth_(inst_13280))
{var statearr_13322_13363 = state_13298__$1;(statearr_13322_13363[1] = 20);
} else
{var statearr_13323_13364 = state_13298__$1;(statearr_13323_13364[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 11))
{var inst_13257 = (state_13298[8]);var inst_13263 = (inst_13257 == null);var state_13298__$1 = state_13298;if(cljs.core.truth_(inst_13263))
{var statearr_13324_13365 = state_13298__$1;(statearr_13324_13365[1] = 14);
} else
{var statearr_13325_13366 = state_13298__$1;(statearr_13325_13366[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 9))
{var inst_13250 = (state_13298[10]);var inst_13250__$1 = (state_13298[2]);var inst_13251 = cljs.core.get.call(null,inst_13250__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13252 = cljs.core.get.call(null,inst_13250__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13253 = cljs.core.get.call(null,inst_13250__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13298__$1 = (function (){var statearr_13326 = state_13298;(statearr_13326[17] = inst_13252);
(statearr_13326[15] = inst_13253);
(statearr_13326[10] = inst_13250__$1);
return statearr_13326;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13298__$1,10,inst_13251);
} else
{if((state_val_13299 === 5))
{var inst_13242 = (state_13298[7]);var inst_13245 = cljs.core.seq_QMARK_.call(null,inst_13242);var state_13298__$1 = state_13298;if(inst_13245)
{var statearr_13327_13367 = state_13298__$1;(statearr_13327_13367[1] = 7);
} else
{var statearr_13328_13368 = state_13298__$1;(statearr_13328_13368[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 14))
{var inst_13258 = (state_13298[16]);var inst_13265 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13258);var state_13298__$1 = state_13298;var statearr_13329_13369 = state_13298__$1;(statearr_13329_13369[2] = inst_13265);
(statearr_13329_13369[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 26))
{var inst_13288 = (state_13298[2]);var state_13298__$1 = state_13298;var statearr_13330_13370 = state_13298__$1;(statearr_13330_13370[2] = inst_13288);
(statearr_13330_13370[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 16))
{var inst_13268 = (state_13298[2]);var inst_13269 = calc_state.call(null);var inst_13242 = inst_13269;var state_13298__$1 = (function (){var statearr_13331 = state_13298;(statearr_13331[18] = inst_13268);
(statearr_13331[7] = inst_13242);
return statearr_13331;
})();var statearr_13332_13371 = state_13298__$1;(statearr_13332_13371[2] = null);
(statearr_13332_13371[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 10))
{var inst_13257 = (state_13298[8]);var inst_13258 = (state_13298[16]);var inst_13256 = (state_13298[2]);var inst_13257__$1 = cljs.core.nth.call(null,inst_13256,0,null);var inst_13258__$1 = cljs.core.nth.call(null,inst_13256,1,null);var inst_13259 = (inst_13257__$1 == null);var inst_13260 = cljs.core._EQ_.call(null,inst_13258__$1,change);var inst_13261 = (inst_13259) || (inst_13260);var state_13298__$1 = (function (){var statearr_13333 = state_13298;(statearr_13333[8] = inst_13257__$1);
(statearr_13333[16] = inst_13258__$1);
return statearr_13333;
})();if(cljs.core.truth_(inst_13261))
{var statearr_13334_13372 = state_13298__$1;(statearr_13334_13372[1] = 11);
} else
{var statearr_13335_13373 = state_13298__$1;(statearr_13335_13373[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 18))
{var inst_13252 = (state_13298[17]);var inst_13253 = (state_13298[15]);var inst_13258 = (state_13298[16]);var inst_13275 = cljs.core.empty_QMARK_.call(null,inst_13253);var inst_13276 = inst_13252.call(null,inst_13258);var inst_13277 = cljs.core.not.call(null,inst_13276);var inst_13278 = (inst_13275) && (inst_13277);var state_13298__$1 = state_13298;var statearr_13336_13374 = state_13298__$1;(statearr_13336_13374[2] = inst_13278);
(statearr_13336_13374[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13299 === 8))
{var inst_13242 = (state_13298[7]);var state_13298__$1 = state_13298;var statearr_13337_13375 = state_13298__$1;(statearr_13337_13375[2] = inst_13242);
(statearr_13337_13375[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_13341 = (new Array(19));(statearr_13341[0] = state_machine__8091__auto__);
(statearr_13341[1] = 1);
return statearr_13341;
});
var state_machine__8091__auto____1 = (function (state_13298){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_13298);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e13342){if((e13342 instanceof Object))
{var ex__8094__auto__ = e13342;var statearr_13343_13376 = state_13298;(statearr_13343_13376[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13377 = state_13298;
state_13298 = G__13377;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_13298){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_13298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_13344 = f__8167__auto__.call(null);(statearr_13344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___13345);
return statearr_13344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13379 = {};return obj13379;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3362__auto__ = p;if(and__3362__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3362__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3972__auto__ = (((p == null))?null:p);return (function (){var or__3374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3362__auto__ = p;if(and__3362__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3362__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3972__auto__ = (((p == null))?null:p);return (function (){var or__3374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3362__auto__ = p;if(and__3362__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3362__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3972__auto__ = (((p == null))?null:p);return (function (){var or__3374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3362__auto__ = p;if(and__3362__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3362__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3972__auto__ = (((p == null))?null:p);return (function (){var or__3374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3972__auto__)]);if(or__3374__auto__)
{return or__3374__auto__;
} else
{var or__3374__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3374__auto____$1)
{return or__3374__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3374__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3374__auto__))
{return or__3374__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3374__auto__,mults){
return (function (p1__13380_SHARP_){if(cljs.core.truth_(p1__13380_SHARP_.call(null,topic)))
{return p1__13380_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13380_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3374__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13503 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13504){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13504 = meta13504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13503.cljs$lang$type = true;
cljs.core.async.t13503.cljs$lang$ctorStr = "cljs.core.async/t13503";
cljs.core.async.t13503.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3913__auto__,writer__3914__auto__,opt__3915__auto__){return cljs.core._write.call(null,writer__3914__auto__,"cljs.core.async/t13503");
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13505){var self__ = this;
var _13505__$1 = this;return self__.meta13504;
});})(mults,ensure_mult))
;
cljs.core.async.t13503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13505,meta13504__$1){var self__ = this;
var _13505__$1 = this;return (new cljs.core.async.t13503(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13504__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13503 = ((function (mults,ensure_mult){
return (function __GT_t13503(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13504){return (new cljs.core.async.t13503(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13504));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13503(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8166__auto___13625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_13577){var state_val_13578 = (state_13577[1]);if((state_val_13578 === 7))
{var inst_13573 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13579_13626 = state_13577__$1;(statearr_13579_13626[2] = inst_13573);
(statearr_13579_13626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 20))
{var state_13577__$1 = state_13577;var statearr_13580_13627 = state_13577__$1;(statearr_13580_13627[2] = null);
(statearr_13580_13627[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 1))
{var state_13577__$1 = state_13577;var statearr_13581_13628 = state_13577__$1;(statearr_13581_13628[2] = null);
(statearr_13581_13628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 24))
{var inst_13556 = (state_13577[7]);var inst_13565 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13556);var state_13577__$1 = state_13577;var statearr_13582_13629 = state_13577__$1;(statearr_13582_13629[2] = inst_13565);
(statearr_13582_13629[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 4))
{var inst_13508 = (state_13577[8]);var inst_13508__$1 = (state_13577[2]);var inst_13509 = (inst_13508__$1 == null);var state_13577__$1 = (function (){var statearr_13583 = state_13577;(statearr_13583[8] = inst_13508__$1);
return statearr_13583;
})();if(cljs.core.truth_(inst_13509))
{var statearr_13584_13630 = state_13577__$1;(statearr_13584_13630[1] = 5);
} else
{var statearr_13585_13631 = state_13577__$1;(statearr_13585_13631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 15))
{var inst_13550 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13586_13632 = state_13577__$1;(statearr_13586_13632[2] = inst_13550);
(statearr_13586_13632[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 21))
{var inst_13570 = (state_13577[2]);var state_13577__$1 = (function (){var statearr_13587 = state_13577;(statearr_13587[9] = inst_13570);
return statearr_13587;
})();var statearr_13588_13633 = state_13577__$1;(statearr_13588_13633[2] = null);
(statearr_13588_13633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 13))
{var inst_13532 = (state_13577[10]);var inst_13534 = cljs.core.chunked_seq_QMARK_.call(null,inst_13532);var state_13577__$1 = state_13577;if(inst_13534)
{var statearr_13589_13634 = state_13577__$1;(statearr_13589_13634[1] = 16);
} else
{var statearr_13590_13635 = state_13577__$1;(statearr_13590_13635[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 22))
{var inst_13562 = (state_13577[2]);var state_13577__$1 = state_13577;if(cljs.core.truth_(inst_13562))
{var statearr_13591_13636 = state_13577__$1;(statearr_13591_13636[1] = 23);
} else
{var statearr_13592_13637 = state_13577__$1;(statearr_13592_13637[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 6))
{var inst_13508 = (state_13577[8]);var inst_13558 = (state_13577[11]);var inst_13556 = (state_13577[7]);var inst_13556__$1 = topic_fn.call(null,inst_13508);var inst_13557 = cljs.core.deref.call(null,mults);var inst_13558__$1 = cljs.core.get.call(null,inst_13557,inst_13556__$1);var state_13577__$1 = (function (){var statearr_13593 = state_13577;(statearr_13593[11] = inst_13558__$1);
(statearr_13593[7] = inst_13556__$1);
return statearr_13593;
})();if(cljs.core.truth_(inst_13558__$1))
{var statearr_13594_13638 = state_13577__$1;(statearr_13594_13638[1] = 19);
} else
{var statearr_13595_13639 = state_13577__$1;(statearr_13595_13639[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 25))
{var inst_13567 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13596_13640 = state_13577__$1;(statearr_13596_13640[2] = inst_13567);
(statearr_13596_13640[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 17))
{var inst_13532 = (state_13577[10]);var inst_13541 = cljs.core.first.call(null,inst_13532);var inst_13542 = cljs.core.async.muxch_STAR_.call(null,inst_13541);var inst_13543 = cljs.core.async.close_BANG_.call(null,inst_13542);var inst_13544 = cljs.core.next.call(null,inst_13532);var inst_13518 = inst_13544;var inst_13519 = null;var inst_13520 = 0;var inst_13521 = 0;var state_13577__$1 = (function (){var statearr_13597 = state_13577;(statearr_13597[12] = inst_13543);
(statearr_13597[13] = inst_13519);
(statearr_13597[14] = inst_13518);
(statearr_13597[15] = inst_13520);
(statearr_13597[16] = inst_13521);
return statearr_13597;
})();var statearr_13598_13641 = state_13577__$1;(statearr_13598_13641[2] = null);
(statearr_13598_13641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 3))
{var inst_13575 = (state_13577[2]);var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13577__$1,inst_13575);
} else
{if((state_val_13578 === 12))
{var inst_13552 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13599_13642 = state_13577__$1;(statearr_13599_13642[2] = inst_13552);
(statearr_13599_13642[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 2))
{var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13577__$1,4,ch);
} else
{if((state_val_13578 === 23))
{var state_13577__$1 = state_13577;var statearr_13600_13643 = state_13577__$1;(statearr_13600_13643[2] = null);
(statearr_13600_13643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 19))
{var inst_13508 = (state_13577[8]);var inst_13558 = (state_13577[11]);var inst_13560 = cljs.core.async.muxch_STAR_.call(null,inst_13558);var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13577__$1,22,inst_13560,inst_13508);
} else
{if((state_val_13578 === 11))
{var inst_13532 = (state_13577[10]);var inst_13518 = (state_13577[14]);var inst_13532__$1 = cljs.core.seq.call(null,inst_13518);var state_13577__$1 = (function (){var statearr_13601 = state_13577;(statearr_13601[10] = inst_13532__$1);
return statearr_13601;
})();if(inst_13532__$1)
{var statearr_13602_13644 = state_13577__$1;(statearr_13602_13644[1] = 13);
} else
{var statearr_13603_13645 = state_13577__$1;(statearr_13603_13645[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 9))
{var inst_13554 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13604_13646 = state_13577__$1;(statearr_13604_13646[2] = inst_13554);
(statearr_13604_13646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 5))
{var inst_13515 = cljs.core.deref.call(null,mults);var inst_13516 = cljs.core.vals.call(null,inst_13515);var inst_13517 = cljs.core.seq.call(null,inst_13516);var inst_13518 = inst_13517;var inst_13519 = null;var inst_13520 = 0;var inst_13521 = 0;var state_13577__$1 = (function (){var statearr_13605 = state_13577;(statearr_13605[13] = inst_13519);
(statearr_13605[14] = inst_13518);
(statearr_13605[15] = inst_13520);
(statearr_13605[16] = inst_13521);
return statearr_13605;
})();var statearr_13606_13647 = state_13577__$1;(statearr_13606_13647[2] = null);
(statearr_13606_13647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 14))
{var state_13577__$1 = state_13577;var statearr_13610_13648 = state_13577__$1;(statearr_13610_13648[2] = null);
(statearr_13610_13648[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 16))
{var inst_13532 = (state_13577[10]);var inst_13536 = cljs.core.chunk_first.call(null,inst_13532);var inst_13537 = cljs.core.chunk_rest.call(null,inst_13532);var inst_13538 = cljs.core.count.call(null,inst_13536);var inst_13518 = inst_13537;var inst_13519 = inst_13536;var inst_13520 = inst_13538;var inst_13521 = 0;var state_13577__$1 = (function (){var statearr_13611 = state_13577;(statearr_13611[13] = inst_13519);
(statearr_13611[14] = inst_13518);
(statearr_13611[15] = inst_13520);
(statearr_13611[16] = inst_13521);
return statearr_13611;
})();var statearr_13612_13649 = state_13577__$1;(statearr_13612_13649[2] = null);
(statearr_13612_13649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 10))
{var inst_13519 = (state_13577[13]);var inst_13518 = (state_13577[14]);var inst_13520 = (state_13577[15]);var inst_13521 = (state_13577[16]);var inst_13526 = cljs.core._nth.call(null,inst_13519,inst_13521);var inst_13527 = cljs.core.async.muxch_STAR_.call(null,inst_13526);var inst_13528 = cljs.core.async.close_BANG_.call(null,inst_13527);var inst_13529 = (inst_13521 + 1);var tmp13607 = inst_13519;var tmp13608 = inst_13518;var tmp13609 = inst_13520;var inst_13518__$1 = tmp13608;var inst_13519__$1 = tmp13607;var inst_13520__$1 = tmp13609;var inst_13521__$1 = inst_13529;var state_13577__$1 = (function (){var statearr_13613 = state_13577;(statearr_13613[13] = inst_13519__$1);
(statearr_13613[14] = inst_13518__$1);
(statearr_13613[15] = inst_13520__$1);
(statearr_13613[16] = inst_13521__$1);
(statearr_13613[17] = inst_13528);
return statearr_13613;
})();var statearr_13614_13650 = state_13577__$1;(statearr_13614_13650[2] = null);
(statearr_13614_13650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 18))
{var inst_13547 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13615_13651 = state_13577__$1;(statearr_13615_13651[2] = inst_13547);
(statearr_13615_13651[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 8))
{var inst_13520 = (state_13577[15]);var inst_13521 = (state_13577[16]);var inst_13523 = (inst_13521 < inst_13520);var inst_13524 = inst_13523;var state_13577__$1 = state_13577;if(cljs.core.truth_(inst_13524))
{var statearr_13616_13652 = state_13577__$1;(statearr_13616_13652[1] = 10);
} else
{var statearr_13617_13653 = state_13577__$1;(statearr_13617_13653[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_13621 = (new Array(18));(statearr_13621[0] = state_machine__8091__auto__);
(statearr_13621[1] = 1);
return statearr_13621;
});
var state_machine__8091__auto____1 = (function (state_13577){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_13577);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object))
{var ex__8094__auto__ = e13622;var statearr_13623_13654 = state_13577;(statearr_13623_13654[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13655 = state_13577;
state_13577 = G__13655;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_13577){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_13577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_13624 = f__8167__auto__.call(null);(statearr_13624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___13625);
return statearr_13624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8166__auto___13792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_13762){var state_val_13763 = (state_13762[1]);if((state_val_13763 === 7))
{var state_13762__$1 = state_13762;var statearr_13764_13793 = state_13762__$1;(statearr_13764_13793[2] = null);
(statearr_13764_13793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 1))
{var state_13762__$1 = state_13762;var statearr_13765_13794 = state_13762__$1;(statearr_13765_13794[2] = null);
(statearr_13765_13794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 4))
{var inst_13726 = (state_13762[7]);var inst_13728 = (inst_13726 < cnt);var state_13762__$1 = state_13762;if(cljs.core.truth_(inst_13728))
{var statearr_13766_13795 = state_13762__$1;(statearr_13766_13795[1] = 6);
} else
{var statearr_13767_13796 = state_13762__$1;(statearr_13767_13796[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 15))
{var inst_13758 = (state_13762[2]);var state_13762__$1 = state_13762;var statearr_13768_13797 = state_13762__$1;(statearr_13768_13797[2] = inst_13758);
(statearr_13768_13797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 13))
{var inst_13751 = cljs.core.async.close_BANG_.call(null,out);var state_13762__$1 = state_13762;var statearr_13769_13798 = state_13762__$1;(statearr_13769_13798[2] = inst_13751);
(statearr_13769_13798[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 6))
{var state_13762__$1 = state_13762;var statearr_13770_13799 = state_13762__$1;(statearr_13770_13799[2] = null);
(statearr_13770_13799[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 3))
{var inst_13760 = (state_13762[2]);var state_13762__$1 = state_13762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13762__$1,inst_13760);
} else
{if((state_val_13763 === 12))
{var inst_13748 = (state_13762[8]);var inst_13748__$1 = (state_13762[2]);var inst_13749 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13748__$1);var state_13762__$1 = (function (){var statearr_13771 = state_13762;(statearr_13771[8] = inst_13748__$1);
return statearr_13771;
})();if(cljs.core.truth_(inst_13749))
{var statearr_13772_13800 = state_13762__$1;(statearr_13772_13800[1] = 13);
} else
{var statearr_13773_13801 = state_13762__$1;(statearr_13773_13801[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 2))
{var inst_13725 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13726 = 0;var state_13762__$1 = (function (){var statearr_13774 = state_13762;(statearr_13774[7] = inst_13726);
(statearr_13774[9] = inst_13725);
return statearr_13774;
})();var statearr_13775_13802 = state_13762__$1;(statearr_13775_13802[2] = null);
(statearr_13775_13802[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 11))
{var inst_13726 = (state_13762[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13762,10,Object,null,9);var inst_13735 = chs__$1.call(null,inst_13726);var inst_13736 = done.call(null,inst_13726);var inst_13737 = cljs.core.async.take_BANG_.call(null,inst_13735,inst_13736);var state_13762__$1 = state_13762;var statearr_13776_13803 = state_13762__$1;(statearr_13776_13803[2] = inst_13737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 9))
{var inst_13726 = (state_13762[7]);var inst_13739 = (state_13762[2]);var inst_13740 = (inst_13726 + 1);var inst_13726__$1 = inst_13740;var state_13762__$1 = (function (){var statearr_13777 = state_13762;(statearr_13777[10] = inst_13739);
(statearr_13777[7] = inst_13726__$1);
return statearr_13777;
})();var statearr_13778_13804 = state_13762__$1;(statearr_13778_13804[2] = null);
(statearr_13778_13804[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 5))
{var inst_13746 = (state_13762[2]);var state_13762__$1 = (function (){var statearr_13779 = state_13762;(statearr_13779[11] = inst_13746);
return statearr_13779;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13762__$1,12,dchan);
} else
{if((state_val_13763 === 14))
{var inst_13748 = (state_13762[8]);var inst_13753 = cljs.core.apply.call(null,f,inst_13748);var state_13762__$1 = state_13762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13762__$1,16,out,inst_13753);
} else
{if((state_val_13763 === 16))
{var inst_13755 = (state_13762[2]);var state_13762__$1 = (function (){var statearr_13780 = state_13762;(statearr_13780[12] = inst_13755);
return statearr_13780;
})();var statearr_13781_13805 = state_13762__$1;(statearr_13781_13805[2] = null);
(statearr_13781_13805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 10))
{var inst_13730 = (state_13762[2]);var inst_13731 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13762__$1 = (function (){var statearr_13782 = state_13762;(statearr_13782[13] = inst_13730);
return statearr_13782;
})();var statearr_13783_13806 = state_13762__$1;(statearr_13783_13806[2] = inst_13731);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 8))
{var inst_13744 = (state_13762[2]);var state_13762__$1 = state_13762;var statearr_13784_13807 = state_13762__$1;(statearr_13784_13807[2] = inst_13744);
(statearr_13784_13807[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_13788 = (new Array(14));(statearr_13788[0] = state_machine__8091__auto__);
(statearr_13788[1] = 1);
return statearr_13788;
});
var state_machine__8091__auto____1 = (function (state_13762){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_13762);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e13789){if((e13789 instanceof Object))
{var ex__8094__auto__ = e13789;var statearr_13790_13808 = state_13762;(statearr_13790_13808[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13809 = state_13762;
state_13762 = G__13809;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_13762){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_13762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_13791 = f__8167__auto__.call(null);(statearr_13791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___13792);
return statearr_13791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___13917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_13893){var state_val_13894 = (state_13893[1]);if((state_val_13894 === 7))
{var inst_13872 = (state_13893[7]);var inst_13873 = (state_13893[8]);var inst_13872__$1 = (state_13893[2]);var inst_13873__$1 = cljs.core.nth.call(null,inst_13872__$1,0,null);var inst_13874 = cljs.core.nth.call(null,inst_13872__$1,1,null);var inst_13875 = (inst_13873__$1 == null);var state_13893__$1 = (function (){var statearr_13895 = state_13893;(statearr_13895[7] = inst_13872__$1);
(statearr_13895[9] = inst_13874);
(statearr_13895[8] = inst_13873__$1);
return statearr_13895;
})();if(cljs.core.truth_(inst_13875))
{var statearr_13896_13918 = state_13893__$1;(statearr_13896_13918[1] = 8);
} else
{var statearr_13897_13919 = state_13893__$1;(statearr_13897_13919[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 1))
{var inst_13864 = cljs.core.vec.call(null,chs);var inst_13865 = inst_13864;var state_13893__$1 = (function (){var statearr_13898 = state_13893;(statearr_13898[10] = inst_13865);
return statearr_13898;
})();var statearr_13899_13920 = state_13893__$1;(statearr_13899_13920[2] = null);
(statearr_13899_13920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 4))
{var inst_13865 = (state_13893[10]);var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13893__$1,7,inst_13865);
} else
{if((state_val_13894 === 6))
{var inst_13889 = (state_13893[2]);var state_13893__$1 = state_13893;var statearr_13900_13921 = state_13893__$1;(statearr_13900_13921[2] = inst_13889);
(statearr_13900_13921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 3))
{var inst_13891 = (state_13893[2]);var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13893__$1,inst_13891);
} else
{if((state_val_13894 === 2))
{var inst_13865 = (state_13893[10]);var inst_13867 = cljs.core.count.call(null,inst_13865);var inst_13868 = (inst_13867 > 0);var state_13893__$1 = state_13893;if(cljs.core.truth_(inst_13868))
{var statearr_13902_13922 = state_13893__$1;(statearr_13902_13922[1] = 4);
} else
{var statearr_13903_13923 = state_13893__$1;(statearr_13903_13923[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 11))
{var inst_13865 = (state_13893[10]);var inst_13882 = (state_13893[2]);var tmp13901 = inst_13865;var inst_13865__$1 = tmp13901;var state_13893__$1 = (function (){var statearr_13904 = state_13893;(statearr_13904[11] = inst_13882);
(statearr_13904[10] = inst_13865__$1);
return statearr_13904;
})();var statearr_13905_13924 = state_13893__$1;(statearr_13905_13924[2] = null);
(statearr_13905_13924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 9))
{var inst_13873 = (state_13893[8]);var state_13893__$1 = state_13893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13893__$1,11,out,inst_13873);
} else
{if((state_val_13894 === 5))
{var inst_13887 = cljs.core.async.close_BANG_.call(null,out);var state_13893__$1 = state_13893;var statearr_13906_13925 = state_13893__$1;(statearr_13906_13925[2] = inst_13887);
(statearr_13906_13925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 10))
{var inst_13885 = (state_13893[2]);var state_13893__$1 = state_13893;var statearr_13907_13926 = state_13893__$1;(statearr_13907_13926[2] = inst_13885);
(statearr_13907_13926[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13894 === 8))
{var inst_13872 = (state_13893[7]);var inst_13874 = (state_13893[9]);var inst_13865 = (state_13893[10]);var inst_13873 = (state_13893[8]);var inst_13877 = (function (){var c = inst_13874;var v = inst_13873;var vec__13870 = inst_13872;var cs = inst_13865;return ((function (c,v,vec__13870,cs,inst_13872,inst_13874,inst_13865,inst_13873,state_val_13894){
return (function (p1__13810_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13810_SHARP_);
});
;})(c,v,vec__13870,cs,inst_13872,inst_13874,inst_13865,inst_13873,state_val_13894))
})();var inst_13878 = cljs.core.filterv.call(null,inst_13877,inst_13865);var inst_13865__$1 = inst_13878;var state_13893__$1 = (function (){var statearr_13908 = state_13893;(statearr_13908[10] = inst_13865__$1);
return statearr_13908;
})();var statearr_13909_13927 = state_13893__$1;(statearr_13909_13927[2] = null);
(statearr_13909_13927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_13913 = (new Array(12));(statearr_13913[0] = state_machine__8091__auto__);
(statearr_13913[1] = 1);
return statearr_13913;
});
var state_machine__8091__auto____1 = (function (state_13893){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_13893);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e13914){if((e13914 instanceof Object))
{var ex__8094__auto__ = e13914;var statearr_13915_13928 = state_13893;(statearr_13915_13928[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13929 = state_13893;
state_13893 = G__13929;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_13893){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_13893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_13916 = f__8167__auto__.call(null);(statearr_13916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___13917);
return statearr_13916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___14022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_13999){var state_val_14000 = (state_13999[1]);if((state_val_14000 === 7))
{var inst_13981 = (state_13999[7]);var inst_13981__$1 = (state_13999[2]);var inst_13982 = (inst_13981__$1 == null);var inst_13983 = cljs.core.not.call(null,inst_13982);var state_13999__$1 = (function (){var statearr_14001 = state_13999;(statearr_14001[7] = inst_13981__$1);
return statearr_14001;
})();if(inst_13983)
{var statearr_14002_14023 = state_13999__$1;(statearr_14002_14023[1] = 8);
} else
{var statearr_14003_14024 = state_13999__$1;(statearr_14003_14024[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 1))
{var inst_13976 = 0;var state_13999__$1 = (function (){var statearr_14004 = state_13999;(statearr_14004[8] = inst_13976);
return statearr_14004;
})();var statearr_14005_14025 = state_13999__$1;(statearr_14005_14025[2] = null);
(statearr_14005_14025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 4))
{var state_13999__$1 = state_13999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13999__$1,7,ch);
} else
{if((state_val_14000 === 6))
{var inst_13994 = (state_13999[2]);var state_13999__$1 = state_13999;var statearr_14006_14026 = state_13999__$1;(statearr_14006_14026[2] = inst_13994);
(statearr_14006_14026[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 3))
{var inst_13996 = (state_13999[2]);var inst_13997 = cljs.core.async.close_BANG_.call(null,out);var state_13999__$1 = (function (){var statearr_14007 = state_13999;(statearr_14007[9] = inst_13996);
return statearr_14007;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13999__$1,inst_13997);
} else
{if((state_val_14000 === 2))
{var inst_13976 = (state_13999[8]);var inst_13978 = (inst_13976 < n);var state_13999__$1 = state_13999;if(cljs.core.truth_(inst_13978))
{var statearr_14008_14027 = state_13999__$1;(statearr_14008_14027[1] = 4);
} else
{var statearr_14009_14028 = state_13999__$1;(statearr_14009_14028[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 11))
{var inst_13976 = (state_13999[8]);var inst_13986 = (state_13999[2]);var inst_13987 = (inst_13976 + 1);var inst_13976__$1 = inst_13987;var state_13999__$1 = (function (){var statearr_14010 = state_13999;(statearr_14010[10] = inst_13986);
(statearr_14010[8] = inst_13976__$1);
return statearr_14010;
})();var statearr_14011_14029 = state_13999__$1;(statearr_14011_14029[2] = null);
(statearr_14011_14029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 9))
{var state_13999__$1 = state_13999;var statearr_14012_14030 = state_13999__$1;(statearr_14012_14030[2] = null);
(statearr_14012_14030[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 5))
{var state_13999__$1 = state_13999;var statearr_14013_14031 = state_13999__$1;(statearr_14013_14031[2] = null);
(statearr_14013_14031[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 10))
{var inst_13991 = (state_13999[2]);var state_13999__$1 = state_13999;var statearr_14014_14032 = state_13999__$1;(statearr_14014_14032[2] = inst_13991);
(statearr_14014_14032[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14000 === 8))
{var inst_13981 = (state_13999[7]);var state_13999__$1 = state_13999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13999__$1,11,out,inst_13981);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_14018 = (new Array(11));(statearr_14018[0] = state_machine__8091__auto__);
(statearr_14018[1] = 1);
return statearr_14018;
});
var state_machine__8091__auto____1 = (function (state_13999){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_13999);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e14019){if((e14019 instanceof Object))
{var ex__8094__auto__ = e14019;var statearr_14020_14033 = state_13999;(statearr_14020_14033[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13999);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14034 = state_13999;
state_13999 = G__14034;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_13999){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_13999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_14021 = f__8167__auto__.call(null);(statearr_14021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___14022);
return statearr_14021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___14131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_14106){var state_val_14107 = (state_14106[1]);if((state_val_14107 === 7))
{var inst_14101 = (state_14106[2]);var state_14106__$1 = state_14106;var statearr_14108_14132 = state_14106__$1;(statearr_14108_14132[2] = inst_14101);
(statearr_14108_14132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 1))
{var inst_14083 = null;var state_14106__$1 = (function (){var statearr_14109 = state_14106;(statearr_14109[7] = inst_14083);
return statearr_14109;
})();var statearr_14110_14133 = state_14106__$1;(statearr_14110_14133[2] = null);
(statearr_14110_14133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 4))
{var inst_14086 = (state_14106[8]);var inst_14086__$1 = (state_14106[2]);var inst_14087 = (inst_14086__$1 == null);var inst_14088 = cljs.core.not.call(null,inst_14087);var state_14106__$1 = (function (){var statearr_14111 = state_14106;(statearr_14111[8] = inst_14086__$1);
return statearr_14111;
})();if(inst_14088)
{var statearr_14112_14134 = state_14106__$1;(statearr_14112_14134[1] = 5);
} else
{var statearr_14113_14135 = state_14106__$1;(statearr_14113_14135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 6))
{var state_14106__$1 = state_14106;var statearr_14114_14136 = state_14106__$1;(statearr_14114_14136[2] = null);
(statearr_14114_14136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 3))
{var inst_14103 = (state_14106[2]);var inst_14104 = cljs.core.async.close_BANG_.call(null,out);var state_14106__$1 = (function (){var statearr_14115 = state_14106;(statearr_14115[9] = inst_14103);
return statearr_14115;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14106__$1,inst_14104);
} else
{if((state_val_14107 === 2))
{var state_14106__$1 = state_14106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14106__$1,4,ch);
} else
{if((state_val_14107 === 11))
{var inst_14086 = (state_14106[8]);var inst_14095 = (state_14106[2]);var inst_14083 = inst_14086;var state_14106__$1 = (function (){var statearr_14116 = state_14106;(statearr_14116[10] = inst_14095);
(statearr_14116[7] = inst_14083);
return statearr_14116;
})();var statearr_14117_14137 = state_14106__$1;(statearr_14117_14137[2] = null);
(statearr_14117_14137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 9))
{var inst_14086 = (state_14106[8]);var state_14106__$1 = state_14106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14106__$1,11,out,inst_14086);
} else
{if((state_val_14107 === 5))
{var inst_14086 = (state_14106[8]);var inst_14083 = (state_14106[7]);var inst_14090 = cljs.core._EQ_.call(null,inst_14086,inst_14083);var state_14106__$1 = state_14106;if(inst_14090)
{var statearr_14119_14138 = state_14106__$1;(statearr_14119_14138[1] = 8);
} else
{var statearr_14120_14139 = state_14106__$1;(statearr_14120_14139[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 10))
{var inst_14098 = (state_14106[2]);var state_14106__$1 = state_14106;var statearr_14121_14140 = state_14106__$1;(statearr_14121_14140[2] = inst_14098);
(statearr_14121_14140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14107 === 8))
{var inst_14083 = (state_14106[7]);var tmp14118 = inst_14083;var inst_14083__$1 = tmp14118;var state_14106__$1 = (function (){var statearr_14122 = state_14106;(statearr_14122[7] = inst_14083__$1);
return statearr_14122;
})();var statearr_14123_14141 = state_14106__$1;(statearr_14123_14141[2] = null);
(statearr_14123_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_14127 = (new Array(11));(statearr_14127[0] = state_machine__8091__auto__);
(statearr_14127[1] = 1);
return statearr_14127;
});
var state_machine__8091__auto____1 = (function (state_14106){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_14106);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e14128){if((e14128 instanceof Object))
{var ex__8094__auto__ = e14128;var statearr_14129_14142 = state_14106;(statearr_14129_14142[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14143 = state_14106;
state_14106 = G__14143;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_14106){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_14106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_14130 = f__8167__auto__.call(null);(statearr_14130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___14131);
return statearr_14130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___14278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_14248){var state_val_14249 = (state_14248[1]);if((state_val_14249 === 7))
{var inst_14244 = (state_14248[2]);var state_14248__$1 = state_14248;var statearr_14250_14279 = state_14248__$1;(statearr_14250_14279[2] = inst_14244);
(statearr_14250_14279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 1))
{var inst_14211 = (new Array(n));var inst_14212 = inst_14211;var inst_14213 = 0;var state_14248__$1 = (function (){var statearr_14251 = state_14248;(statearr_14251[7] = inst_14212);
(statearr_14251[8] = inst_14213);
return statearr_14251;
})();var statearr_14252_14280 = state_14248__$1;(statearr_14252_14280[2] = null);
(statearr_14252_14280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 4))
{var inst_14216 = (state_14248[9]);var inst_14216__$1 = (state_14248[2]);var inst_14217 = (inst_14216__$1 == null);var inst_14218 = cljs.core.not.call(null,inst_14217);var state_14248__$1 = (function (){var statearr_14253 = state_14248;(statearr_14253[9] = inst_14216__$1);
return statearr_14253;
})();if(inst_14218)
{var statearr_14254_14281 = state_14248__$1;(statearr_14254_14281[1] = 5);
} else
{var statearr_14255_14282 = state_14248__$1;(statearr_14255_14282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 15))
{var inst_14238 = (state_14248[2]);var state_14248__$1 = state_14248;var statearr_14256_14283 = state_14248__$1;(statearr_14256_14283[2] = inst_14238);
(statearr_14256_14283[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 13))
{var state_14248__$1 = state_14248;var statearr_14257_14284 = state_14248__$1;(statearr_14257_14284[2] = null);
(statearr_14257_14284[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 6))
{var inst_14213 = (state_14248[8]);var inst_14234 = (inst_14213 > 0);var state_14248__$1 = state_14248;if(cljs.core.truth_(inst_14234))
{var statearr_14258_14285 = state_14248__$1;(statearr_14258_14285[1] = 12);
} else
{var statearr_14259_14286 = state_14248__$1;(statearr_14259_14286[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 3))
{var inst_14246 = (state_14248[2]);var state_14248__$1 = state_14248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14248__$1,inst_14246);
} else
{if((state_val_14249 === 12))
{var inst_14212 = (state_14248[7]);var inst_14236 = cljs.core.vec.call(null,inst_14212);var state_14248__$1 = state_14248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14248__$1,15,out,inst_14236);
} else
{if((state_val_14249 === 2))
{var state_14248__$1 = state_14248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14248__$1,4,ch);
} else
{if((state_val_14249 === 11))
{var inst_14228 = (state_14248[2]);var inst_14229 = (new Array(n));var inst_14212 = inst_14229;var inst_14213 = 0;var state_14248__$1 = (function (){var statearr_14260 = state_14248;(statearr_14260[7] = inst_14212);
(statearr_14260[10] = inst_14228);
(statearr_14260[8] = inst_14213);
return statearr_14260;
})();var statearr_14261_14287 = state_14248__$1;(statearr_14261_14287[2] = null);
(statearr_14261_14287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 9))
{var inst_14212 = (state_14248[7]);var inst_14226 = cljs.core.vec.call(null,inst_14212);var state_14248__$1 = state_14248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14248__$1,11,out,inst_14226);
} else
{if((state_val_14249 === 5))
{var inst_14216 = (state_14248[9]);var inst_14212 = (state_14248[7]);var inst_14221 = (state_14248[11]);var inst_14213 = (state_14248[8]);var inst_14220 = (inst_14212[inst_14213] = inst_14216);var inst_14221__$1 = (inst_14213 + 1);var inst_14222 = (inst_14221__$1 < n);var state_14248__$1 = (function (){var statearr_14262 = state_14248;(statearr_14262[12] = inst_14220);
(statearr_14262[11] = inst_14221__$1);
return statearr_14262;
})();if(cljs.core.truth_(inst_14222))
{var statearr_14263_14288 = state_14248__$1;(statearr_14263_14288[1] = 8);
} else
{var statearr_14264_14289 = state_14248__$1;(statearr_14264_14289[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 14))
{var inst_14241 = (state_14248[2]);var inst_14242 = cljs.core.async.close_BANG_.call(null,out);var state_14248__$1 = (function (){var statearr_14266 = state_14248;(statearr_14266[13] = inst_14241);
return statearr_14266;
})();var statearr_14267_14290 = state_14248__$1;(statearr_14267_14290[2] = inst_14242);
(statearr_14267_14290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 10))
{var inst_14232 = (state_14248[2]);var state_14248__$1 = state_14248;var statearr_14268_14291 = state_14248__$1;(statearr_14268_14291[2] = inst_14232);
(statearr_14268_14291[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14249 === 8))
{var inst_14212 = (state_14248[7]);var inst_14221 = (state_14248[11]);var tmp14265 = inst_14212;var inst_14212__$1 = tmp14265;var inst_14213 = inst_14221;var state_14248__$1 = (function (){var statearr_14269 = state_14248;(statearr_14269[7] = inst_14212__$1);
(statearr_14269[8] = inst_14213);
return statearr_14269;
})();var statearr_14270_14292 = state_14248__$1;(statearr_14270_14292[2] = null);
(statearr_14270_14292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_14274 = (new Array(14));(statearr_14274[0] = state_machine__8091__auto__);
(statearr_14274[1] = 1);
return statearr_14274;
});
var state_machine__8091__auto____1 = (function (state_14248){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_14248);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e14275){if((e14275 instanceof Object))
{var ex__8094__auto__ = e14275;var statearr_14276_14293 = state_14248;(statearr_14276_14293[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14294 = state_14248;
state_14248 = G__14294;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_14248){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_14248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_14277 = f__8167__auto__.call(null);(statearr_14277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___14278);
return statearr_14277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8166__auto___14437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8167__auto__ = (function (){var switch__8090__auto__ = (function (state_14407){var state_val_14408 = (state_14407[1]);if((state_val_14408 === 7))
{var inst_14403 = (state_14407[2]);var state_14407__$1 = state_14407;var statearr_14409_14438 = state_14407__$1;(statearr_14409_14438[2] = inst_14403);
(statearr_14409_14438[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 1))
{var inst_14366 = (new Array(0));var inst_14367 = inst_14366;var inst_14368 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14407__$1 = (function (){var statearr_14410 = state_14407;(statearr_14410[7] = inst_14368);
(statearr_14410[8] = inst_14367);
return statearr_14410;
})();var statearr_14411_14439 = state_14407__$1;(statearr_14411_14439[2] = null);
(statearr_14411_14439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 4))
{var inst_14371 = (state_14407[9]);var inst_14371__$1 = (state_14407[2]);var inst_14372 = (inst_14371__$1 == null);var inst_14373 = cljs.core.not.call(null,inst_14372);var state_14407__$1 = (function (){var statearr_14412 = state_14407;(statearr_14412[9] = inst_14371__$1);
return statearr_14412;
})();if(inst_14373)
{var statearr_14413_14440 = state_14407__$1;(statearr_14413_14440[1] = 5);
} else
{var statearr_14414_14441 = state_14407__$1;(statearr_14414_14441[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 15))
{var inst_14397 = (state_14407[2]);var state_14407__$1 = state_14407;var statearr_14415_14442 = state_14407__$1;(statearr_14415_14442[2] = inst_14397);
(statearr_14415_14442[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 13))
{var state_14407__$1 = state_14407;var statearr_14416_14443 = state_14407__$1;(statearr_14416_14443[2] = null);
(statearr_14416_14443[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 6))
{var inst_14367 = (state_14407[8]);var inst_14392 = inst_14367.length;var inst_14393 = (inst_14392 > 0);var state_14407__$1 = state_14407;if(cljs.core.truth_(inst_14393))
{var statearr_14417_14444 = state_14407__$1;(statearr_14417_14444[1] = 12);
} else
{var statearr_14418_14445 = state_14407__$1;(statearr_14418_14445[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 3))
{var inst_14405 = (state_14407[2]);var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14407__$1,inst_14405);
} else
{if((state_val_14408 === 12))
{var inst_14367 = (state_14407[8]);var inst_14395 = cljs.core.vec.call(null,inst_14367);var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14407__$1,15,out,inst_14395);
} else
{if((state_val_14408 === 2))
{var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14407__$1,4,ch);
} else
{if((state_val_14408 === 11))
{var inst_14371 = (state_14407[9]);var inst_14375 = (state_14407[10]);var inst_14385 = (state_14407[2]);var inst_14386 = (new Array(0));var inst_14387 = inst_14386.push(inst_14371);var inst_14367 = inst_14386;var inst_14368 = inst_14375;var state_14407__$1 = (function (){var statearr_14419 = state_14407;(statearr_14419[7] = inst_14368);
(statearr_14419[11] = inst_14387);
(statearr_14419[12] = inst_14385);
(statearr_14419[8] = inst_14367);
return statearr_14419;
})();var statearr_14420_14446 = state_14407__$1;(statearr_14420_14446[2] = null);
(statearr_14420_14446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 9))
{var inst_14367 = (state_14407[8]);var inst_14383 = cljs.core.vec.call(null,inst_14367);var state_14407__$1 = state_14407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14407__$1,11,out,inst_14383);
} else
{if((state_val_14408 === 5))
{var inst_14368 = (state_14407[7]);var inst_14371 = (state_14407[9]);var inst_14375 = (state_14407[10]);var inst_14375__$1 = f.call(null,inst_14371);var inst_14376 = cljs.core._EQ_.call(null,inst_14375__$1,inst_14368);var inst_14377 = cljs.core.keyword_identical_QMARK_.call(null,inst_14368,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14378 = (inst_14376) || (inst_14377);var state_14407__$1 = (function (){var statearr_14421 = state_14407;(statearr_14421[10] = inst_14375__$1);
return statearr_14421;
})();if(cljs.core.truth_(inst_14378))
{var statearr_14422_14447 = state_14407__$1;(statearr_14422_14447[1] = 8);
} else
{var statearr_14423_14448 = state_14407__$1;(statearr_14423_14448[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 14))
{var inst_14400 = (state_14407[2]);var inst_14401 = cljs.core.async.close_BANG_.call(null,out);var state_14407__$1 = (function (){var statearr_14425 = state_14407;(statearr_14425[13] = inst_14400);
return statearr_14425;
})();var statearr_14426_14449 = state_14407__$1;(statearr_14426_14449[2] = inst_14401);
(statearr_14426_14449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 10))
{var inst_14390 = (state_14407[2]);var state_14407__$1 = state_14407;var statearr_14427_14450 = state_14407__$1;(statearr_14427_14450[2] = inst_14390);
(statearr_14427_14450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14408 === 8))
{var inst_14371 = (state_14407[9]);var inst_14367 = (state_14407[8]);var inst_14375 = (state_14407[10]);var inst_14380 = inst_14367.push(inst_14371);var tmp14424 = inst_14367;var inst_14367__$1 = tmp14424;var inst_14368 = inst_14375;var state_14407__$1 = (function (){var statearr_14428 = state_14407;(statearr_14428[7] = inst_14368);
(statearr_14428[8] = inst_14367__$1);
(statearr_14428[14] = inst_14380);
return statearr_14428;
})();var statearr_14429_14451 = state_14407__$1;(statearr_14429_14451[2] = null);
(statearr_14429_14451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8090__auto__){
return (function() {
var state_machine__8091__auto__ = null;
var state_machine__8091__auto____0 = (function (){var statearr_14433 = (new Array(15));(statearr_14433[0] = state_machine__8091__auto__);
(statearr_14433[1] = 1);
return statearr_14433;
});
var state_machine__8091__auto____1 = (function (state_14407){while(true){
var ret_value__8092__auto__ = (function (){try{while(true){
var result__8093__auto__ = switch__8090__auto__.call(null,state_14407);if(cljs.core.keyword_identical_QMARK_.call(null,result__8093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8093__auto__;
}
break;
}
}catch (e14434){if((e14434 instanceof Object))
{var ex__8094__auto__ = e14434;var statearr_14435_14452 = state_14407;(statearr_14435_14452[5] = ex__8094__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8092__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14453 = state_14407;
state_14407 = G__14453;
continue;
}
} else
{return ret_value__8092__auto__;
}
break;
}
});
state_machine__8091__auto__ = function(state_14407){
switch(arguments.length){
case 0:
return state_machine__8091__auto____0.call(this);
case 1:
return state_machine__8091__auto____1.call(this,state_14407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8091__auto____0;
state_machine__8091__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8091__auto____1;
return state_machine__8091__auto__;
})()
;})(switch__8090__auto__))
})();var state__8168__auto__ = (function (){var statearr_14436 = f__8167__auto__.call(null);(statearr_14436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8166__auto___14437);
return statearr_14436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8168__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
