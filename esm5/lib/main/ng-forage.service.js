/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseConfigurableImpl } from '../config/base-configurable-impl.service';
import { setToStringTag } from '../misc/setToStringTag.function';
import * as i0 from "@angular/core";
import * as i1 from "../config/ng-forage-config.service";
import * as i2 from "../instance-factory/instance-factory.service";
/**
 * Cache instance
 */
var NgForage = /** @class */ (function (_super) {
    tslib_1.__extends(NgForage, _super);
    function NgForage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NgForage.prototype, "activeDriver", {
        /**
         * Returns the name of the driver being used, or null if none can be used.
         */
        get: /**
         * Returns the name of the driver being used, or null if none can be used.
         * @return {?}
         */
        function () {
            return this.store.driver();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Removes every key from the database, returning it to a blank slate.
     *
     * clear() will remove <b>every item in the offline store</b>. Use this method with caution.
     */
    /**
     * Removes every key from the database, returning it to a blank slate.
     *
     * clear() will remove <b>every item in the offline store</b>. Use this method with caution.
     * @return {?}
     */
    NgForage.prototype.clear = /**
     * Removes every key from the database, returning it to a blank slate.
     *
     * clear() will remove <b>every item in the offline store</b>. Use this method with caution.
     * @return {?}
     */
    function () {
        return this.store.clear();
    };
    /**
     * Make a clone of the instance
     * @param config Optional configuration
     */
    /**
     * Make a clone of the instance
     * @param {?=} config Optional configuration
     * @return {?}
     */
    NgForage.prototype.clone = /**
     * Make a clone of the instance
     * @param {?=} config Optional configuration
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForage(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    /**
     * Gets an item from the storage library.
     * If the key does not exist, getItem() will return null.
     * @param key Data key
     */
    /**
     * Gets an item from the storage library.
     * If the key does not exist, getItem() will return null.
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    NgForage.prototype.getItem = /**
     * Gets an item from the storage library.
     * If the key does not exist, getItem() will return null.
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    function (key) {
        return this.store.getItem(key);
    };
    /**
     * Iterate over all value/key pairs in datastore.
     * <i>iteratee</i> is called once for each pair, with the following arguments:
     * <ol>
     *   <li>Value</li>
     *   <li>Key</li>
     *   <li>iterationNumber - one-based number</li>
     * </ol>
     * iterate() supports early exit by returning non undefined value inside iteratorCallback callback.
     * @param iteratee
     */
    /**
     * Iterate over all value/key pairs in datastore.
     * <i>iteratee</i> is called once for each pair, with the following arguments:
     * <ol>
     *   <li>Value</li>
     *   <li>Key</li>
     *   <li>iterationNumber - one-based number</li>
     * </ol>
     * iterate() supports early exit by returning non undefined value inside iteratorCallback callback.
     * @template T, U
     * @param {?} iteratee
     * @return {?}
     */
    NgForage.prototype.iterate = /**
     * Iterate over all value/key pairs in datastore.
     * <i>iteratee</i> is called once for each pair, with the following arguments:
     * <ol>
     *   <li>Value</li>
     *   <li>Key</li>
     *   <li>iterationNumber - one-based number</li>
     * </ol>
     * iterate() supports early exit by returning non undefined value inside iteratorCallback callback.
     * @template T, U
     * @param {?} iteratee
     * @return {?}
     */
    function (iteratee) {
        return this.store.iterate(iteratee);
    };
    /**
     * Get the name of a key based on its ID.
     * @param index
     */
    /**
     * Get the name of a key based on its ID.
     * @param {?} index
     * @return {?}
     */
    NgForage.prototype.key = /**
     * Get the name of a key based on its ID.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.store.key(index);
    };
    /**
     * Get the list of all keys in the datastore.
     */
    /**
     * Get the list of all keys in the datastore.
     * @return {?}
     */
    NgForage.prototype.keys = /**
     * Get the list of all keys in the datastore.
     * @return {?}
     */
    function () {
        return this.store.keys();
    };
    /**
     * Gets the number of keys in the offline store (i.e. its “length”).
     */
    /**
     * Gets the number of keys in the offline store (i.e. its “length”).
     * @return {?}
     */
    NgForage.prototype.length = /**
     * Gets the number of keys in the offline store (i.e. its “length”).
     * @return {?}
     */
    function () {
        return this.store.length();
    };
    /**
     * Even though localForage queues up all of its data API method calls,
     * ready() provides a way to determine whether the asynchronous driver initialization process has finished.
     * That’s useful in cases like when we want to know which driver localForage has settled down using.
     */
    /**
     * Even though localForage queues up all of its data API method calls,
     * ready() provides a way to determine whether the asynchronous driver initialization process has finished.
     * That’s useful in cases like when we want to know which driver localForage has settled down using.
     * @return {?}
     */
    NgForage.prototype.ready = /**
     * Even though localForage queues up all of its data API method calls,
     * ready() provides a way to determine whether the asynchronous driver initialization process has finished.
     * That’s useful in cases like when we want to know which driver localForage has settled down using.
     * @return {?}
     */
    function () {
        return this.store.ready();
    };
    /**
     * Removes the value of a key from the offline store.
     * @param key Data key
     */
    /**
     * Removes the value of a key from the offline store.
     * @param {?} key Data key
     * @return {?}
     */
    NgForage.prototype.removeItem = /**
     * Removes the value of a key from the offline store.
     * @param {?} key Data key
     * @return {?}
     */
    function (key) {
        return this.store.removeItem(key);
    };
    /**
     * Saves data to an offline store. You can store the following types of JavaScript objects:
     * <ul>
     *  <li>Array</li>
     *  <li>ArrayBuffer</li>
     *  <li>Blob</li>
     *  <li>Float32Array</li>
     *  <li>Float64Array</li>
     *  <li>Int8Array</li>
     *  <li>Int16Array</li>
     *  <li>Int32Array</li>
     *  <li>Number</li>
     *  <li>Object</li>
     *  <li>Uint8Array</li>
     *  <li>Uint8ClampedArray</li>
     *  <li>Uint16Array</li>
     *  <li>Uint32Array</li>
     *  <li>String</li>
     * </ul>
     * @param key Data key
     * @param data Data
     */
    /**
     * Saves data to an offline store. You can store the following types of JavaScript objects:
     * <ul>
     *  <li>Array</li>
     *  <li>ArrayBuffer</li>
     *  <li>Blob</li>
     *  <li>Float32Array</li>
     *  <li>Float64Array</li>
     *  <li>Int8Array</li>
     *  <li>Int16Array</li>
     *  <li>Int32Array</li>
     *  <li>Number</li>
     *  <li>Object</li>
     *  <li>Uint8Array</li>
     *  <li>Uint8ClampedArray</li>
     *  <li>Uint16Array</li>
     *  <li>Uint32Array</li>
     *  <li>String</li>
     * </ul>
     * @template T
     * @param {?} key Data key
     * @param {?} data Data
     * @return {?}
     */
    NgForage.prototype.setItem = /**
     * Saves data to an offline store. You can store the following types of JavaScript objects:
     * <ul>
     *  <li>Array</li>
     *  <li>ArrayBuffer</li>
     *  <li>Blob</li>
     *  <li>Float32Array</li>
     *  <li>Float64Array</li>
     *  <li>Int8Array</li>
     *  <li>Int16Array</li>
     *  <li>Int32Array</li>
     *  <li>Number</li>
     *  <li>Object</li>
     *  <li>Uint8Array</li>
     *  <li>Uint8ClampedArray</li>
     *  <li>Uint16Array</li>
     *  <li>Uint32Array</li>
     *  <li>String</li>
     * </ul>
     * @template T
     * @param {?} key Data key
     * @param {?} data Data
     * @return {?}
     */
    function (key, data) {
        return this.store.setItem(key, data);
    };
    /**
     * Check whether the given driver is supported/registered.
     * @param driver Driver name
     */
    /**
     * Check whether the given driver is supported/registered.
     * @param {?} driver Driver name
     * @return {?}
     */
    NgForage.prototype.supports = /**
     * Check whether the given driver is supported/registered.
     * @param {?} driver Driver name
     * @return {?}
     */
    function (driver) {
        return this.store.supports((/** @type {?} */ (driver)));
    };
    NgForage.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgForage.ngInjectableDef = i0.defineInjectable({ factory: function NgForage_Factory() { return new NgForage(i0.inject(i1.NgForageConfig), i0.inject(i2.InstanceFactory)); }, token: NgForage, providedIn: "root" });
    return NgForage;
}(BaseConfigurableImpl));
export { NgForage };
setToStringTag(NgForage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2ZvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYWluL25nLWZvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUk5RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7QUFLL0Q7SUFDOEIsb0NBQW9CO0lBRGxEOztLQThIQztJQXhIQyxzQkFBVyxrQ0FBWTtRQUh2Qjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSSx3QkFBSzs7Ozs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksd0JBQUs7Ozs7O0lBQVosVUFBYSxNQUF3Qjs7WUFDN0IsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNJLDBCQUFPOzs7Ozs7O0lBQWQsVUFBa0IsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHOzs7Ozs7Ozs7Ozs7OztJQUNJLDBCQUFPOzs7Ozs7Ozs7Ozs7O0lBQWQsVUFBcUIsUUFBK0Q7UUFDbEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSxzQkFBRzs7Ozs7SUFBVixVQUFXLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksdUJBQUk7Ozs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0kseUJBQU07Ozs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNJLHdCQUFLOzs7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSw2QkFBVTs7Ozs7SUFBakIsVUFBa0IsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0ksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFkLFVBQWtCLEdBQVcsRUFBRSxJQUFPO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLDJCQUFROzs7OztJQUFmLFVBQWdCLE1BQXVCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsTUFBTSxFQUFBLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkE3SEYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O21CQVhoQztDQXlJQyxBQTlIRCxDQUM4QixvQkFBb0IsR0E2SGpEO1NBN0hZLFFBQVE7QUErSHJCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VDb25maWd1cmFibGV9IGZyb20gJy4uL2NvbmZpZy9iYXNlLWNvbmZpZ3VyYWJsZSc7XG5pbXBvcnQge0Jhc2VDb25maWd1cmFibGVJbXBsfSBmcm9tICcuLi9jb25maWcvYmFzZS1jb25maWd1cmFibGUtaW1wbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JhZ2VPcHRpb25zfSBmcm9tICcuLi9jb25maWcvbmctZm9yYWdlLW9wdGlvbnMnO1xuaW1wb3J0IHtEcml2ZXJUeXBlfSBmcm9tICcuLi9taXNjL2RyaXZlci10eXBlLnR5cGUnO1xuaW1wb3J0IHtEcml2ZXJ9IGZyb20gJy4uL21pc2MvZHJpdmVyLmVudW0nO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5cbi8qKlxuICogQ2FjaGUgaW5zdGFuY2VcbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdGb3JhZ2UgZXh0ZW5kcyBCYXNlQ29uZmlndXJhYmxlSW1wbCBpbXBsZW1lbnRzIEJhc2VDb25maWd1cmFibGUge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkcml2ZXIgYmVpbmcgdXNlZCwgb3IgbnVsbCBpZiBub25lIGNhbiBiZSB1c2VkLlxuICAgKi9cbiAgcHVibGljIGdldCBhY3RpdmVEcml2ZXIoKTogRHJpdmVyVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZHJpdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBldmVyeSBrZXkgZnJvbSB0aGUgZGF0YWJhc2UsIHJldHVybmluZyBpdCB0byBhIGJsYW5rIHNsYXRlLlxuICAgKlxuICAgKiBjbGVhcigpIHdpbGwgcmVtb3ZlIDxiPmV2ZXJ5IGl0ZW0gaW4gdGhlIG9mZmxpbmUgc3RvcmU8L2I+LiBVc2UgdGhpcyBtZXRob2Qgd2l0aCBjYXV0aW9uLlxuICAgKi9cbiAgcHVibGljIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIGNsb25lIG9mIHRoZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gY29uZmlnIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBjbG9uZShjb25maWc/OiBOZ0ZvcmFnZU9wdGlvbnMpOiBOZ0ZvcmFnZSB7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBOZ0ZvcmFnZSh0aGlzLmJhc2VDb25maWcsIHRoaXMuZmFjdCk7XG4gICAgaW5zdC5jb25maWd1cmUoT2JqZWN0LmFzc2lnbih0aGlzLmZpbmFsQ29uZmlnLCBjb25maWcgfHwge30pKTtcblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gaXRlbSBmcm9tIHRoZSBzdG9yYWdlIGxpYnJhcnkuXG4gICAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIGdldEl0ZW0oKSB3aWxsIHJldHVybiBudWxsLlxuICAgKiBAcGFyYW0ga2V5IERhdGEga2V5XG4gICAqL1xuICBwdWJsaWMgZ2V0SXRlbTxUPihrZXk6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldEl0ZW08VD4oa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHZhbHVlL2tleSBwYWlycyBpbiBkYXRhc3RvcmUuXG4gICAqIDxpPml0ZXJhdGVlPC9pPiBpcyBjYWxsZWQgb25jZSBmb3IgZWFjaCBwYWlyLCB3aXRoIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuICAgKiA8b2w+XG4gICAqICAgPGxpPlZhbHVlPC9saT5cbiAgICogICA8bGk+S2V5PC9saT5cbiAgICogICA8bGk+aXRlcmF0aW9uTnVtYmVyIC0gb25lLWJhc2VkIG51bWJlcjwvbGk+XG4gICAqIDwvb2w+XG4gICAqIGl0ZXJhdGUoKSBzdXBwb3J0cyBlYXJseSBleGl0IGJ5IHJldHVybmluZyBub24gdW5kZWZpbmVkIHZhbHVlIGluc2lkZSBpdGVyYXRvckNhbGxiYWNrIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gaXRlcmF0ZWVcbiAgICovXG4gIHB1YmxpYyBpdGVyYXRlPFQsIFU+KGl0ZXJhdGVlOiAodmFsdWU6IFQsIGtleTogc3RyaW5nLCBpdGVyYXRpb25OdW1iZXI6IG51bWJlcikgPT4gVSk6IFByb21pc2U8VT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLml0ZXJhdGUoaXRlcmF0ZWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiBhIGtleSBiYXNlZCBvbiBpdHMgSUQuXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgcHVibGljIGtleShpbmRleDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5rZXkoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBhbGwga2V5cyBpbiB0aGUgZGF0YXN0b3JlLlxuICAgKi9cbiAgcHVibGljIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmtleXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGUgb2ZmbGluZSBzdG9yZSAoaS5lLiBpdHMg4oCcbGVuZ3Ro4oCdKS5cbiAgICovXG4gIHB1YmxpYyBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5sZW5ndGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVuIHRob3VnaCBsb2NhbEZvcmFnZSBxdWV1ZXMgdXAgYWxsIG9mIGl0cyBkYXRhIEFQSSBtZXRob2QgY2FsbHMsXG4gICAqIHJlYWR5KCkgcHJvdmlkZXMgYSB3YXkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGFzeW5jaHJvbm91cyBkcml2ZXIgaW5pdGlhbGl6YXRpb24gcHJvY2VzcyBoYXMgZmluaXNoZWQuXG4gICAqIFRoYXTigJlzIHVzZWZ1bCBpbiBjYXNlcyBsaWtlIHdoZW4gd2Ugd2FudCB0byBrbm93IHdoaWNoIGRyaXZlciBsb2NhbEZvcmFnZSBoYXMgc2V0dGxlZCBkb3duIHVzaW5nLlxuICAgKi9cbiAgcHVibGljIHJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnJlYWR5KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgdmFsdWUgb2YgYSBrZXkgZnJvbSB0aGUgb2ZmbGluZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleSBEYXRhIGtleVxuICAgKi9cbiAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgZGF0YSB0byBhbiBvZmZsaW5lIHN0b3JlLiBZb3UgY2FuIHN0b3JlIHRoZSBmb2xsb3dpbmcgdHlwZXMgb2YgSmF2YVNjcmlwdCBvYmplY3RzOlxuICAgKiA8dWw+XG4gICAqICA8bGk+QXJyYXk8L2xpPlxuICAgKiAgPGxpPkFycmF5QnVmZmVyPC9saT5cbiAgICogIDxsaT5CbG9iPC9saT5cbiAgICogIDxsaT5GbG9hdDMyQXJyYXk8L2xpPlxuICAgKiAgPGxpPkZsb2F0NjRBcnJheTwvbGk+XG4gICAqICA8bGk+SW50OEFycmF5PC9saT5cbiAgICogIDxsaT5JbnQxNkFycmF5PC9saT5cbiAgICogIDxsaT5JbnQzMkFycmF5PC9saT5cbiAgICogIDxsaT5OdW1iZXI8L2xpPlxuICAgKiAgPGxpPk9iamVjdDwvbGk+XG4gICAqICA8bGk+VWludDhBcnJheTwvbGk+XG4gICAqICA8bGk+VWludDhDbGFtcGVkQXJyYXk8L2xpPlxuICAgKiAgPGxpPlVpbnQxNkFycmF5PC9saT5cbiAgICogIDxsaT5VaW50MzJBcnJheTwvbGk+XG4gICAqICA8bGk+U3RyaW5nPC9saT5cbiAgICogPC91bD5cbiAgICogQHBhcmFtIGtleSBEYXRhIGtleVxuICAgKiBAcGFyYW0gZGF0YSBEYXRhXG4gICAqL1xuICBwdWJsaWMgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgZGF0YTogVCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldEl0ZW08VD4oa2V5LCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiBkcml2ZXIgaXMgc3VwcG9ydGVkL3JlZ2lzdGVyZWQuXG4gICAqIEBwYXJhbSBkcml2ZXIgRHJpdmVyIG5hbWVcbiAgICovXG4gIHB1YmxpYyBzdXBwb3J0cyhkcml2ZXI6IERyaXZlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnN1cHBvcnRzKDxzdHJpbmc+ZHJpdmVyKTtcbiAgfVxufVxuXG5zZXRUb1N0cmluZ1RhZyhOZ0ZvcmFnZSk7XG4iXX0=