/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgForage } from '../main/ng-forage.service';
import { setToStringTag } from '../misc/setToStringTag.function';
import { CachedItemImpl } from './cached-item-impl.class';
import * as i0 from "@angular/core";
import * as i1 from "../config/ng-forage-config.service";
import * as i2 from "../instance-factory/instance-factory.service";
/**
 * \@internal
 * @record
 */
function CacheKeys() { }
if (false) {
    /** @type {?} */
    CacheKeys.prototype.data;
    /** @type {?} */
    CacheKeys.prototype.expiry;
}
/**
 * \@internal
 * @param {?} mainKey
 * @return {?}
 */
function calculateCacheKeys(mainKey) {
    return {
        data: `${mainKey}_data`,
        expiry: `${mainKey}_expiry`
    };
}
/**
 * \@internal
 * @template T
 * @param {?} r
 * @return {?}
 */
function toCachedItem(r) {
    return new CachedItemImpl(r[0], r[1]);
}
/**
 * \@internal
 * @template T
 * @param {?} r
 * @return {?}
 */
function head(r) {
    return r[0];
}
/**
 * \@internal
 * @return {?}
 */
// tslint:disable-next-line:no-empty
function toVoid() {
}
/**
 * An extension of {\@link NgForage} which adds expiration support
 */
export class NgForageCache extends NgForage {
    /**
     * Cache time in milliseconds
     * \@default 300000
     * @return {?}
     */
    get cacheTime() {
        return this.config.cacheTime || this.baseConfig.cacheTime;
    }
    /**
     * @param {?} t
     * @return {?}
     */
    set cacheTime(t) {
        this.config.cacheTime = t;
        this.storeNeedsRecalc = true;
    }
    /**
     * @inheritDoc
     * @param {?=} config
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForageCache(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
    /**
     * Retrieve data
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    getCached(key) {
        /** @type {?} */
        const keys = calculateCacheKeys(key);
        /** @type {?} */
        const dataPromise = this.getItem(keys.data);
        /** @type {?} */
        const expiryPromise = this.getItem(keys.expiry);
        return Promise.all([dataPromise, expiryPromise]).then(toCachedItem);
    }
    /**
     * Remove data
     * @param {?} key Data key
     * @return {?}
     */
    removeCached(key) {
        /** @type {?} */
        const keys = calculateCacheKeys(key);
        /** @type {?} */
        const dataPromise = this.removeItem(keys.data);
        /** @type {?} */
        const expiryPromise = this.removeItem(keys.expiry);
        return Promise.all([dataPromise, expiryPromise]).then(toVoid);
    }
    /**
     * Set data
     * @template T
     * @param {?} key Data key
     * @param {?} data Data to set
     * @param {?=} cacheTime
     * @return {?}
     */
    setCached(key, data, cacheTime) {
        /** @type {?} */
        const keys = calculateCacheKeys(key);
        /** @type {?} */
        const expiry = typeof cacheTime === 'number' ? cacheTime : this.cacheTime;
        /** @type {?} */
        const dataPromise = this.setItem(keys.data, data);
        /** @type {?} */
        const expiryPromise = this.setItem(keys.expiry, Date.now() + expiry);
        return Promise.all([dataPromise, expiryPromise]).then(head);
    }
    /**
     * \@internal
     * @return {?}
     */
    toJSON() {
        /** @type {?} */
        const ass = { cacheTime: this.cacheTime };
        return Object.assign(super.toJSON(), ass);
    }
}
NgForageCache.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgForageCache.ngInjectableDef = i0.defineInjectable({ factory: function NgForageCache_Factory() { return new NgForageCache(i0.inject(i1.NgForageConfig), i0.inject(i2.InstanceFactory)); }, token: NgForageCache, providedIn: "root" });
setToStringTag(NgForageCache);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWNhY2hlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2ZvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9jYWNoZS9uZy1mb3JhZ2UtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7QUFHeEQsd0JBSUM7OztJQUhDLHlCQUFhOztJQUViLDJCQUFlOzs7Ozs7O0FBSWpCLFNBQVMsa0JBQWtCLENBQUMsT0FBZTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLEdBQUcsT0FBTyxPQUFPO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLE9BQU8sU0FBUztLQUM1QixDQUFDO0FBQ0osQ0FBQzs7Ozs7OztBQUdELFNBQVMsWUFBWSxDQUFJLENBQWM7SUFDckMsT0FBTyxJQUFJLGNBQWMsQ0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQzs7Ozs7OztBQUdELFNBQVMsSUFBSSxDQUFJLENBQWM7SUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFJRCxTQUFTLE1BQU07QUFFZixDQUFDOzs7O0FBTUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxRQUFROzs7Ozs7SUFNekMsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxJQUFXLFNBQVMsQ0FBQyxDQUFTO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUdNLEtBQUssQ0FBQyxNQUF3Qjs7Y0FDN0IsSUFBSSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFNTSxTQUFTLENBQUksR0FBVzs7Y0FDdkIsSUFBSSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQzs7Y0FDOUIsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUksSUFBSSxDQUFDLElBQUksQ0FBQzs7Y0FDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2RCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBTU0sWUFBWSxDQUFDLEdBQVc7O2NBQ3ZCLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7O2NBRTlCLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2NBQ3hDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7OztJQVFNLFNBQVMsQ0FBSSxHQUFXLEVBQUUsSUFBTyxFQUFFLFNBQWtCOztjQUNwRCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDOztjQUM5QixNQUFNLEdBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTOztjQUVuRSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7Y0FDOUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTVFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUdNLE1BQU07O2NBQ0wsR0FBRyxHQUE2QixFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDO1FBRWpFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBdEVGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OztBQXlFaEMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FjaGVDb25maWd1cmFibGV9IGZyb20gJy4uL2NvbmZpZy9jYWNoZS1jb25maWd1cmFibGUnO1xuaW1wb3J0IHtOZ0ZvcmFnZU9wdGlvbnN9IGZyb20gJy4uL2NvbmZpZy9uZy1mb3JhZ2Utb3B0aW9ucyc7XG5pbXBvcnQge05nRm9yYWdlfSBmcm9tICcuLi9tYWluL25nLWZvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuaW1wb3J0IHtDYWNoZWRJdGVtfSBmcm9tICcuL2NhY2hlZC1pdGVtJztcbmltcG9ydCB7Q2FjaGVkSXRlbUltcGx9IGZyb20gJy4vY2FjaGVkLWl0ZW0taW1wbC5jbGFzcyc7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmludGVyZmFjZSBDYWNoZUtleXMge1xuICBkYXRhOiBzdHJpbmc7XG5cbiAgZXhwaXJ5OiBzdHJpbmc7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNhY2hlS2V5cyhtYWluS2V5OiBzdHJpbmcpOiBDYWNoZUtleXMge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IGAke21haW5LZXl9X2RhdGFgLFxuICAgIGV4cGlyeTogYCR7bWFpbktleX1fZXhwaXJ5YFxuICB9O1xufVxuXG4vKiogQGludGVybmFsICovXG5mdW5jdGlvbiB0b0NhY2hlZEl0ZW08VD4ocjogW1QsIG51bWJlcl0pOiBDYWNoZWRJdGVtPFQ+IHtcbiAgcmV0dXJuIG5ldyBDYWNoZWRJdGVtSW1wbDxUPihyWzBdLCByWzFdKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZnVuY3Rpb24gaGVhZDxUPihyOiBbVCwgbnVtYmVyXSkge1xuICByZXR1cm4gclswXTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG5mdW5jdGlvbiB0b1ZvaWQoKTogdm9pZCB7XG5cbn1cblxuLyoqXG4gKiBBbiBleHRlbnNpb24gb2Yge0BsaW5rIE5nRm9yYWdlfSB3aGljaCBhZGRzIGV4cGlyYXRpb24gc3VwcG9ydFxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ0ZvcmFnZUNhY2hlIGV4dGVuZHMgTmdGb3JhZ2UgaW1wbGVtZW50cyBDYWNoZUNvbmZpZ3VyYWJsZSB7XG5cbiAgLyoqXG4gICAqIENhY2hlIHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEBkZWZhdWx0IDMwMDAwMFxuICAgKi9cbiAgcHVibGljIGdldCBjYWNoZVRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY2FjaGVUaW1lIHx8IHRoaXMuYmFzZUNvbmZpZy5jYWNoZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNhY2hlVGltZSh0OiBudW1iZXIpIHtcbiAgICB0aGlzLmNvbmZpZy5jYWNoZVRpbWUgPSB0O1xuICAgIHRoaXMuc3RvcmVOZWVkc1JlY2FsYyA9IHRydWU7XG4gIH1cblxuICAvKiogQGluaGVyaXREb2MgKi9cbiAgcHVibGljIGNsb25lKGNvbmZpZz86IE5nRm9yYWdlT3B0aW9ucyk6IE5nRm9yYWdlQ2FjaGUge1xuICAgIGNvbnN0IGluc3QgPSBuZXcgTmdGb3JhZ2VDYWNoZSh0aGlzLmJhc2VDb25maWcsIHRoaXMuZmFjdCk7XG4gICAgaW5zdC5jb25maWd1cmUoT2JqZWN0LmFzc2lnbih0aGlzLmZpbmFsQ29uZmlnLCBjb25maWcgfHwge30pKTtcblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRhdGFcbiAgICogQHBhcmFtIGtleSBEYXRhIGtleVxuICAgKi9cbiAgcHVibGljIGdldENhY2hlZDxUPihrZXk6IHN0cmluZyk6IFByb21pc2U8Q2FjaGVkSXRlbTxUPj4ge1xuICAgIGNvbnN0IGtleXMgPSBjYWxjdWxhdGVDYWNoZUtleXMoa2V5KTtcbiAgICBjb25zdCBkYXRhUHJvbWlzZSA9IHRoaXMuZ2V0SXRlbTxUPihrZXlzLmRhdGEpO1xuICAgIGNvbnN0IGV4cGlyeVByb21pc2UgPSB0aGlzLmdldEl0ZW08bnVtYmVyPihrZXlzLmV4cGlyeSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2RhdGFQcm9taXNlLCBleHBpcnlQcm9taXNlXSkudGhlbih0b0NhY2hlZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkYXRhXG4gICAqIEBwYXJhbSBrZXkgRGF0YSBrZXlcbiAgICovXG4gIHB1YmxpYyByZW1vdmVDYWNoZWQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBrZXlzID0gY2FsY3VsYXRlQ2FjaGVLZXlzKGtleSk7XG5cbiAgICBjb25zdCBkYXRhUHJvbWlzZSA9IHRoaXMucmVtb3ZlSXRlbShrZXlzLmRhdGEpO1xuICAgIGNvbnN0IGV4cGlyeVByb21pc2UgPSB0aGlzLnJlbW92ZUl0ZW0oa2V5cy5leHBpcnkpO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtkYXRhUHJvbWlzZSwgZXhwaXJ5UHJvbWlzZV0pLnRoZW4odG9Wb2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YVxuICAgKiBAcGFyYW0ga2V5IERhdGEga2V5XG4gICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gc2V0XG4gICAqIEBwYXJhbSBbY2FjaGVUaW1lXSBPdmVycmlkZSBjYWNoZSBzZXQgaW4ge0BsaW5rIENhY2hlQ29uZmlndXJhYmxlI2NhY2hlVGltZSBnbG9iYWwgb3IgaW5zdGFuY2UgY29uZmlnfS5cbiAgICovXG4gIHB1YmxpYyBzZXRDYWNoZWQ8VD4oa2V5OiBzdHJpbmcsIGRhdGE6IFQsIGNhY2hlVGltZT86IG51bWJlcik6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IGtleXMgPSBjYWxjdWxhdGVDYWNoZUtleXMoa2V5KTtcbiAgICBjb25zdCBleHBpcnkgPSB0eXBlb2YgY2FjaGVUaW1lID09PSAnbnVtYmVyJyA/IGNhY2hlVGltZSA6IHRoaXMuY2FjaGVUaW1lO1xuXG4gICAgY29uc3QgZGF0YVByb21pc2UgPSB0aGlzLnNldEl0ZW08VD4oa2V5cy5kYXRhLCBkYXRhKTtcbiAgICBjb25zdCBleHBpcnlQcm9taXNlID0gdGhpcy5zZXRJdGVtPG51bWJlcj4oa2V5cy5leHBpcnksIERhdGUubm93KCkgKyBleHBpcnkpO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtkYXRhUHJvbWlzZSwgZXhwaXJ5UHJvbWlzZV0pLnRoZW4oaGVhZCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyB0b0pTT04oKTogTmdGb3JhZ2VPcHRpb25zIHtcbiAgICBjb25zdCBhc3M6IFBhcnRpYWw8TmdGb3JhZ2VPcHRpb25zPiA9IHtjYWNoZVRpbWU6IHRoaXMuY2FjaGVUaW1lfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN1cGVyLnRvSlNPTigpLCBhc3MpO1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKE5nRm9yYWdlQ2FjaGUpO1xuIl19