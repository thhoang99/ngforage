/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import 'localforage';
import { localForage as lf } from '../imports/localforage';
import { Driver } from '../misc/driver.enum';
import { DEFAULT_CONFIG } from '../misc/injection-tokens';
import { setToStringTag } from '../misc/setToStringTag.function';
import * as i0 from "@angular/core";
import * as i1 from "../misc/injection-tokens";
/**
 * \@internal
 * @type {?}
 */
var $defaultConfig = Symbol('Default Config');
/**
 * Global/default configuration
 */
var NgForageConfig = /** @class */ (function () {
    function NgForageConfig(conf) {
        this[$defaultConfig] = {
            cacheTime: 300000,
            description: '',
            driver: [Driver.INDEXED_DB, Driver.WEB_SQL, Driver.LOCAL_STORAGE],
            name: 'ngForage',
            size: 4980736,
            storeName: 'ng_forage',
            version: 1
        };
        if (conf) {
            this.configure(conf);
        }
    }
    Object.defineProperty(NgForageConfig.prototype, "cacheTime", {
        /**
         * Cache time in milliseconds
         * @default 300000
         */
        get: /**
         * Cache time in milliseconds
         * \@default 300000
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].cacheTime));
        },
        set: /**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            this[$defaultConfig].cacheTime = t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "config", {
        /**
         * Get the compiled configuration
         */
        get: /**
         * Get the compiled configuration
         * @return {?}
         */
        function () {
            return {
                cacheTime: this.cacheTime,
                description: this.description,
                driver: this.driver,
                name: this.name,
                size: this.size,
                storeName: this.storeName,
                version: this.version
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "description", {
        /**
         * A description of the database, essentially for developer usage.
         * @default
         */
        get: /**
         * A description of the database, essentially for developer usage.
         * \@default
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].description));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].description = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "driver", {
        /**
         * The preferred driver(s) to use.
         */
        get: /**
         * The preferred driver(s) to use.
         * @return {?}
         */
        function () {
            if (typeof this[$defaultConfig].driver === 'string') {
                return (/** @type {?} */ (this[$defaultConfig].driver));
            }
            return ((/** @type {?} */ (this[$defaultConfig].driver))).slice();
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].driver = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "name", {
        /**
         * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
         * In localStorage, this is used as a key prefix for all keys stored in localStorage.
         * @default ngForage
         */
        get: /**
         * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
         * In localStorage, this is used as a key prefix for all keys stored in localStorage.
         * \@default ngForage
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].name));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "size", {
        /**
         * The size of the database in bytes. Used only in WebSQL for now.
         * @default 4980736
         */
        get: /**
         * The size of the database in bytes. Used only in WebSQL for now.
         * \@default 4980736
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].size));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].size = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "storeName", {
        /**
         * The name of the datastore.
         * In IndexedDB this is the dataStore,
         * in WebSQL this is the name of the key/value table in the database.
         * Must be alphanumeric, with underscores.
         * Any non-alphanumeric characters will be converted to underscores.
         * @default ng_forage
         */
        get: /**
         * The name of the datastore.
         * In IndexedDB this is the dataStore,
         * in WebSQL this is the name of the key/value table in the database.
         * Must be alphanumeric, with underscores.
         * Any non-alphanumeric characters will be converted to underscores.
         * \@default ng_forage
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].storeName));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].storeName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForageConfig.prototype, "version", {
        /**
         * The version of your database. May be used for upgrades in the future; currently unused.
         * @default 1.0
         */
        get: /**
         * The version of your database. May be used for upgrades in the future; currently unused.
         * \@default 1.0
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this[$defaultConfig].version));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this[$defaultConfig].version = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Bulk-set configuration options
     * @param opts The configuration
     */
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    NgForageConfig.prototype.configure = /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    function (opts) {
        opts = opts || {};
        if (opts.driver && ((/** @type {?} */ (opts.driver))).slice) {
            opts.driver = ((/** @type {?} */ (opts.driver))).slice();
        }
        Object.assign((/** @type {?} */ (this))[$defaultConfig], opts);
        return (/** @type {?} */ (this));
    };
    /**
     * Define a driver
     *
     * You’ll want to make sure you accept a callback argument and that you pass the same arguments to callbacks as the
     * default drivers do. You’ll also want to resolve or reject promises.
     * Check any of the {@link https://github.com/mozilla/localForage/tree/master/src/drivers default drivers}
     * for an idea of how to implement your own, custom driver.
     * @param spec Driver spec
     */
    /**
     * Define a driver
     *
     * You’ll want to make sure you accept a callback argument and that you pass the same arguments to callbacks as the
     * default drivers do. You’ll also want to resolve or reject promises.
     * Check any of the {\@link https://github.com/mozilla/localForage/tree/master/src/drivers default drivers}
     * for an idea of how to implement your own, custom driver.
     * @param {?} spec Driver spec
     * @return {?}
     */
    NgForageConfig.prototype.defineDriver = /**
     * Define a driver
     *
     * You’ll want to make sure you accept a callback argument and that you pass the same arguments to callbacks as the
     * default drivers do. You’ll also want to resolve or reject promises.
     * Check any of the {\@link https://github.com/mozilla/localForage/tree/master/src/drivers default drivers}
     * for an idea of how to implement your own, custom driver.
     * @param {?} spec Driver spec
     * @return {?}
     */
    function (spec) {
        return lf.defineDriver(spec);
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    NgForageConfig.prototype.toJSON = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @return {?}
     */
    NgForageConfig.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.toJSON());
    };
    NgForageConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NgForageConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NgForageConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgForageConfig_Factory() { return new NgForageConfig(i0.inject(i1.DEFAULT_CONFIG, 8)); }, token: NgForageConfig, providedIn: "root" });
    return NgForageConfig;
}());
export { NgForageConfig };
if (false) {
    /* Skipping unnamed member:
    private readonly [$defaultConfig]: NgForageOptions;*/
}
setToStringTag(NgForageConfig);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL25nLWZvcmFnZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7SUFNekQsY0FBYyxHQUFrQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUFLOUQ7SUFNRSx3QkFBdUQsSUFBcUI7UUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHO1lBQ3JCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDakUsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLE9BQU87WUFDYixTQUFTLEVBQUUsV0FBVztZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBTUQsc0JBQVcscUNBQVM7UUFKcEI7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sbUJBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNB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QyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxtQkFBTyxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFjLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25EO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7OztJQUNJLHFDQUFZOzs7Ozs7Ozs7O0lBQW5CLFVBQW9CLElBQXVCO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCOzs7OztJQUNULCtCQUFNOzs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFwS0YsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnREFNVixRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7Ozt5QkF2QnZEO0NBc0xDLEFBcktELElBcUtDO1NBcEtZLGNBQWM7Ozs7O0FBc0szQixjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQge2xvY2FsRm9yYWdlIGFzIGxmfSBmcm9tICcuLi9pbXBvcnRzL2xvY2FsZm9yYWdlJztcbmltcG9ydCB7RHJpdmVyVHlwZX0gZnJvbSAnLi4vbWlzYy9kcml2ZXItdHlwZS50eXBlJztcbmltcG9ydCB7RHJpdmVyfSBmcm9tICcuLi9taXNjL2RyaXZlci5lbnVtJztcbmltcG9ydCB7REVGQVVMVF9DT05GSUd9IGZyb20gJy4uL21pc2MvaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQge3NldFRvU3RyaW5nVGFnfSBmcm9tICcuLi9taXNjL3NldFRvU3RyaW5nVGFnLmZ1bmN0aW9uJztcbmltcG9ydCB7QmFzZUNvbmZpZ3VyYWJsZX0gZnJvbSAnLi9iYXNlLWNvbmZpZ3VyYWJsZSc7XG5pbXBvcnQge0NhY2hlQ29uZmlndXJhYmxlfSBmcm9tICcuL2NhY2hlLWNvbmZpZ3VyYWJsZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi9uZy1mb3JhZ2Utb3B0aW9ucyc7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0ICRkZWZhdWx0Q29uZmlnOiB1bmlxdWUgc3ltYm9sID0gU3ltYm9sKCdEZWZhdWx0IENvbmZpZycpO1xuXG4vKipcbiAqIEdsb2JhbC9kZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdGb3JhZ2VDb25maWcgaW1wbGVtZW50cyBCYXNlQ29uZmlndXJhYmxlLCBDYWNoZUNvbmZpZ3VyYWJsZSB7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcml2YXRlIHJlYWRvbmx5IFskZGVmYXVsdENvbmZpZ106IE5nRm9yYWdlT3B0aW9ucztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChERUZBVUxUX0NPTkZJRykgY29uZjogTmdGb3JhZ2VPcHRpb25zKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10gPSB7XG4gICAgICBjYWNoZVRpbWU6IDMwMDAwMCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGRyaXZlcjogW0RyaXZlci5JTkRFWEVEX0RCLCBEcml2ZXIuV0VCX1NRTCwgRHJpdmVyLkxPQ0FMX1NUT1JBR0VdLFxuICAgICAgbmFtZTogJ25nRm9yYWdlJyxcbiAgICAgIHNpemU6IDQ5ODA3MzYsXG4gICAgICBzdG9yZU5hbWU6ICduZ19mb3JhZ2UnLFxuICAgICAgdmVyc2lvbjogMVxuICAgIH07XG4gICAgaWYgKGNvbmYpIHtcbiAgICAgIHRoaXMuY29uZmlndXJlKGNvbmYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZSB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAZGVmYXVsdCAzMDAwMDBcbiAgICovXG4gIHB1YmxpYyBnZXQgY2FjaGVUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDxudW1iZXI+dGhpc1skZGVmYXVsdENvbmZpZ10uY2FjaGVUaW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBjYWNoZVRpbWUodDogbnVtYmVyKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10uY2FjaGVUaW1lID0gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbXBpbGVkIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgY29uZmlnKCk6IE5nRm9yYWdlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhY2hlVGltZTogdGhpcy5jYWNoZVRpbWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGRyaXZlcjogdGhpcy5kcml2ZXIsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBzdG9yZU5hbWU6IHRoaXMuc3RvcmVOYW1lLFxuICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhYmFzZSwgZXNzZW50aWFsbHkgZm9yIGRldmVsb3BlciB1c2FnZS5cbiAgICogQGRlZmF1bHRcbiAgICovXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gPHN0cmluZz50aGlzWyRkZWZhdWx0Q29uZmlnXS5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odjogc3RyaW5nKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10uZGVzY3JpcHRpb24gPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcmVmZXJyZWQgZHJpdmVyKHMpIHRvIHVzZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgZHJpdmVyKCk6IERyaXZlclR5cGUgfCBEcml2ZXJUeXBlW10ge1xuICAgIGlmICh0eXBlb2YgdGhpc1skZGVmYXVsdENvbmZpZ10uZHJpdmVyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDxzdHJpbmc+dGhpc1skZGVmYXVsdENvbmZpZ10uZHJpdmVyO1xuICAgIH1cblxuICAgIHJldHVybiAoPHN0cmluZ1tdPnRoaXNbJGRlZmF1bHRDb25maWddLmRyaXZlcikuc2xpY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZHJpdmVyKHY6IERyaXZlclR5cGUgfCBEcml2ZXJUeXBlW10pIHtcbiAgICB0aGlzWyRkZWZhdWx0Q29uZmlnXS5kcml2ZXIgPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS4gTWF5IGFwcGVhciBkdXJpbmcgc3RvcmFnZSBsaW1pdCBwcm9tcHRzLiBVc2VmdWwgdG8gdXNlIHRoZSBuYW1lIG9mIHlvdXIgYXBwIGhlcmUuXG4gICAqIEluIGxvY2FsU3RvcmFnZSwgdGhpcyBpcyB1c2VkIGFzIGEga2V5IHByZWZpeCBmb3IgYWxsIGtleXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS5cbiAgICogQGRlZmF1bHQgbmdGb3JhZ2VcbiAgICovXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiA8c3RyaW5nPnRoaXNbJGRlZmF1bHRDb25maWddLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IG5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10ubmFtZSA9IHY7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGRhdGFiYXNlIGluIGJ5dGVzLiBVc2VkIG9ubHkgaW4gV2ViU1FMIGZvciBub3cuXG4gICAqIEBkZWZhdWx0IDQ5ODA3MzZcbiAgICovXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiA8bnVtYmVyPnRoaXNbJGRlZmF1bHRDb25maWddLnNpemU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNpemUodjogbnVtYmVyKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10uc2l6ZSA9IHY7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGRhdGFzdG9yZS5cbiAgICogSW4gSW5kZXhlZERCIHRoaXMgaXMgdGhlIGRhdGFTdG9yZSxcbiAgICogaW4gV2ViU1FMIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGtleS92YWx1ZSB0YWJsZSBpbiB0aGUgZGF0YWJhc2UuXG4gICAqIE11c3QgYmUgYWxwaGFudW1lcmljLCB3aXRoIHVuZGVyc2NvcmVzLlxuICAgKiBBbnkgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29udmVydGVkIHRvIHVuZGVyc2NvcmVzLlxuICAgKiBAZGVmYXVsdCBuZ19mb3JhZ2VcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RvcmVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIDxzdHJpbmc+dGhpc1skZGVmYXVsdENvbmZpZ10uc3RvcmVOYW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBzdG9yZU5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10uc3RvcmVOYW1lID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB5b3VyIGRhdGFiYXNlLiBNYXkgYmUgdXNlZCBmb3IgdXBncmFkZXMgaW4gdGhlIGZ1dHVyZTsgY3VycmVudGx5IHVudXNlZC5cbiAgICogQGRlZmF1bHQgMS4wXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gPG51bWJlcj50aGlzWyRkZWZhdWx0Q29uZmlnXS52ZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIHNldCB2ZXJzaW9uKHY6IG51bWJlcikge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLnZlcnNpb24gPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1bGstc2V0IGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0cyBUaGUgY29uZmlndXJhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZShvcHRzOiBOZ0ZvcmFnZU9wdGlvbnMpOiB0aGlzIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChvcHRzLmRyaXZlciAmJiAoPGFueVtdPm9wdHMuZHJpdmVyKS5zbGljZSkge1xuICAgICAgb3B0cy5kcml2ZXIgPSAoPERyaXZlclR5cGVbXT5vcHRzLmRyaXZlcikuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXNbJGRlZmF1bHRDb25maWddLCBvcHRzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhIGRyaXZlclxuICAgKlxuICAgKiBZb3XigJlsbCB3YW50IHRvIG1ha2Ugc3VyZSB5b3UgYWNjZXB0IGEgY2FsbGJhY2sgYXJndW1lbnQgYW5kIHRoYXQgeW91IHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGNhbGxiYWNrcyBhcyB0aGVcbiAgICogZGVmYXVsdCBkcml2ZXJzIGRvLiBZb3XigJlsbCBhbHNvIHdhbnQgdG8gcmVzb2x2ZSBvciByZWplY3QgcHJvbWlzZXMuXG4gICAqIENoZWNrIGFueSBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3RyZWUvbWFzdGVyL3NyYy9kcml2ZXJzIGRlZmF1bHQgZHJpdmVyc31cbiAgICogZm9yIGFuIGlkZWEgb2YgaG93IHRvIGltcGxlbWVudCB5b3VyIG93biwgY3VzdG9tIGRyaXZlci5cbiAgICogQHBhcmFtIHNwZWMgRHJpdmVyIHNwZWNcbiAgICovXG4gIHB1YmxpYyBkZWZpbmVEcml2ZXIoc3BlYzogTG9jYWxGb3JhZ2VEcml2ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbGYuZGVmaW5lRHJpdmVyKHNwZWMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgdG9KU09OKCk6IE5nRm9yYWdlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCkpO1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKE5nRm9yYWdlQ29uZmlnKTtcbiJdfQ==