import * as lf from 'localforage';
import lf__default, {  } from 'localforage';
import { InjectionToken, Inject, Injectable, Optional, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @param {?} clazz
 * @param {?=} tag
 * @return {?}
 */
function setToStringTag(clazz, tag) {
    Object.defineProperty(clazz.prototype, Symbol.toStringTag, {
        configurable: false,
        enumerable: false,
        value: tag || clazz.name,
        writable: false
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @template T
 */
class CachedItemImpl {
    /**
     * @param {?} data
     * @param {?} expiryTime
     */
    constructor(data, expiryTime) {
        this.data = data;
        this.expires = new Date(typeof (/** @type {?} */ (expiryTime)) === 'number' ? expiryTime : 0);
    }
    /**
     * @return {?}
     */
    get expired() {
        /** @type {?} */
        const value = this.expiresIn === 0;
        if (value) {
            Object.defineProperty(this, 'expired', { value });
        }
        return value;
    }
    /**
     * @return {?}
     */
    get expiresIn() {
        /** @type {?} */
        const value = Math.max(0, this.expires.getTime() - Date.now());
        if (!value) {
            Object.defineProperty(this, 'expiresIn', { value });
        }
        return value;
    }
    /**
     * @return {?}
     */
    get hasData() {
        /** @type {?} */
        const value = this.data != null;
        Object.defineProperty(this, 'hasData', { value });
        return value;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            data: this.data,
            expired: this.expired,
            expires: this.expires,
            expiresIn: this.expiresIn,
            hasData: this.hasData
        };
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
setToStringTag(CachedItemImpl, 'CachedItem');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const localForage = 'defineDriver' in lf ? lf : lf__default;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Driver = {
    /** The IndexedDB driver */
    INDEXED_DB: (/** @type {?} */ (localForage.INDEXEDDB)),
    /** The localStorage driver */
    LOCAL_STORAGE: (/** @type {?} */ (localForage.LOCALSTORAGE)),
    /** The WebSQL driver */
    WEB_SQL: (/** @type {?} */ (localForage.WEBSQL)),
};
for (const d of [localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL]) {
    delete Driver[d];
}
Object.freeze(Driver);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = new InjectionToken('Default NgForage config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const $defaultConfig = Symbol('Default Config');
/**
 * Global/default configuration
 */
class NgForageConfig {
    /**
     * @param {?} conf
     */
    constructor(conf) {
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
    /**
     * Cache time in milliseconds
     * \@default 300000
     * @return {?}
     */
    get cacheTime() {
        return (/** @type {?} */ (this[$defaultConfig].cacheTime));
    }
    /**
     * @param {?} t
     * @return {?}
     */
    set cacheTime(t) {
        this[$defaultConfig].cacheTime = t;
    }
    /**
     * Get the compiled configuration
     * @return {?}
     */
    get config() {
        return {
            cacheTime: this.cacheTime,
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    }
    /**
     * A description of the database, essentially for developer usage.
     * \@default
     * @return {?}
     */
    get description() {
        return (/** @type {?} */ (this[$defaultConfig].description));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set description(v) {
        this[$defaultConfig].description = v;
    }
    /**
     * The preferred driver(s) to use.
     * @return {?}
     */
    get driver() {
        if (typeof this[$defaultConfig].driver === 'string') {
            return (/** @type {?} */ (this[$defaultConfig].driver));
        }
        return ((/** @type {?} */ (this[$defaultConfig].driver))).slice();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set driver(v) {
        this[$defaultConfig].driver = v;
    }
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * \@default ngForage
     * @return {?}
     */
    get name() {
        return (/** @type {?} */ (this[$defaultConfig].name));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set name(v) {
        this[$defaultConfig].name = v;
    }
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * \@default 4980736
     * @return {?}
     */
    get size() {
        return (/** @type {?} */ (this[$defaultConfig].size));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set size(v) {
        this[$defaultConfig].size = v;
    }
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * \@default ng_forage
     * @return {?}
     */
    get storeName() {
        return (/** @type {?} */ (this[$defaultConfig].storeName));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set storeName(v) {
        this[$defaultConfig].storeName = v;
    }
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * \@default 1.0
     * @return {?}
     */
    get version() {
        return (/** @type {?} */ (this[$defaultConfig].version));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set version(v) {
        this[$defaultConfig].version = v;
    }
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    configure(opts) {
        opts = opts || {};
        if (opts.driver && ((/** @type {?} */ (opts.driver))).slice) {
            opts.driver = ((/** @type {?} */ (opts.driver))).slice();
        }
        Object.assign((/** @type {?} */ (this))[$defaultConfig], opts);
        return (/** @type {?} */ (this));
    }
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
    defineDriver(spec) {
        return localForage.defineDriver(spec);
    }
    /**
     * \@internal
     * @return {?}
     */
    toJSON() {
        return this.config;
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
NgForageConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NgForageConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_CONFIG,] }] }
];
/** @nocollapse */ NgForageConfig.ngInjectableDef = defineInjectable({ factory: function NgForageConfig_Factory() { return new NgForageConfig(inject(DEFAULT_CONFIG, 8)); }, token: NgForageConfig, providedIn: "root" });
setToStringTag(NgForageConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const stores = {};
/**
 * \@internal
 * @param {?=} driver
 * @return {?}
 */
function getDriverString(driver) {
    if (!driver) {
        return '';
    }
    else if (Array.isArray(driver)) {
        return driver.slice().sort().join(',');
    }
    else {
        return (/** @type {?} */ (driver));
    }
}
/**
 * \@internal
 * @param {?} cfg
 * @return {?}
 */
function getHash(cfg) {
    return [
        getDriverString(cfg.driver),
        cfg.name,
        cfg.size,
        cfg.storeName,
        cfg.version,
        cfg.description,
        cfg.cacheTime
    ].join('|');
}
/**
 * \@internal
 * @type {?}
 */
const conf$ = Symbol('Config');
/**
 * Creates localForage instances
 */
class InstanceFactory {
    /**
     * \@internal
     * @param {?} conf
     */
    constructor(conf) {
        this[conf$] = conf;
    }
    /**
     * @param {?} cfg
     * @return {?}
     */
    getInstance(cfg) {
        cfg = Object.assign({}, this[conf$].config, cfg || {});
        /** @type {?} */
        const hash = getHash(cfg);
        if (!stores[hash]) {
            stores[hash] = localForage.createInstance(cfg);
        }
        return stores[hash];
    }
}
InstanceFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
InstanceFactory.ctorParameters = () => [
    { type: NgForageConfig }
];
/** @nocollapse */ InstanceFactory.ngInjectableDef = defineInjectable({ factory: function InstanceFactory_Factory() { return new InstanceFactory(inject(NgForageConfig)); }, token: InstanceFactory, providedIn: "root" });
setToStringTag(InstanceFactory);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const store$ = Symbol('Store');
/**
 * Abstract service-level configuration layer for NgForage
 * @abstract
 */
class BaseConfigurableImpl {
    /**
     * \@internal
     * @param {?} config
     * @param {?} instanceFactory
     */
    constructor(config, instanceFactory) {
        /**
         * \@internal
         */
        this.config = {};
        this.baseConfig = config;
        this.fact = instanceFactory;
    }
    /**
     * A description of the database, essentially for developer usage.
     * \@default ""
     * @return {?}
     */
    get description() {
        return this.config.description || this.baseConfig.description;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set description(v) {
        this.config.description = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The preferred driver(s) to use.
     * \@default IndexedDB, WebSQL and localStorage
     * @return {?}
     */
    get driver() {
        return this.config.driver || this.baseConfig.driver;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set driver(v) {
        this.config.driver = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * \@default ngForage
     * @return {?}
     */
    get name() {
        return this.config.name || this.baseConfig.name;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set name(v) {
        this.config.name = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * \@default 4980736
     * @return {?}
     */
    get size() {
        return this.config.size || this.baseConfig.size;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set size(v) {
        this.config.size = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * \@default ng_forage
     * @return {?}
     */
    get storeName() {
        return this.config.storeName || this.baseConfig.storeName;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set storeName(v) {
        this.config.storeName = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * \@default 1.0
     * @return {?}
     */
    get version() {
        return 'version' in this.config ? (/** @type {?} */ (this.config.version)) : this.baseConfig.version;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set version(v) {
        this.config.version = v;
        this.storeNeedsRecalc = true;
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    get finalConfig() {
        return Object.assign({}, this.baseConfig.config, this.config);
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    get store() {
        if (this.storeNeedsRecalc || !this[store$]) {
            this[store$] = this.fact.getInstance(this.finalConfig);
            this.storeNeedsRecalc = false;
        }
        return this[store$];
    }
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    configure(opts) {
        opts = opts || {};
        if (Array.isArray(opts.driver)) {
            opts.driver = opts.driver.slice();
        }
        Object.assign((/** @type {?} */ (this)).config, opts);
        (/** @type {?} */ (this)).storeNeedsRecalc = true;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
/** @nocollapse */
BaseConfigurableImpl.ctorParameters = () => [
    { type: NgForageConfig, decorators: [{ type: Inject, args: [NgForageConfig,] }] },
    { type: InstanceFactory, decorators: [{ type: Inject, args: [InstanceFactory,] }] }
];
setToStringTag(BaseConfigurableImpl, 'BaseConfigurable');
Object.defineProperty((/** @type {?} */ (BaseConfigurableImpl)), 'storeNeedsRecalc', {
    configurable: true,
    enumerable: true,
    value: true,
    writable: true
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cache instance
 */
class NgForage extends BaseConfigurableImpl {
    /**
     * Returns the name of the driver being used, or null if none can be used.
     * @return {?}
     */
    get activeDriver() {
        return this.store.driver();
    }
    /**
     * Removes every key from the database, returning it to a blank slate.
     *
     * clear() will remove <b>every item in the offline store</b>. Use this method with caution.
     * @return {?}
     */
    clear() {
        return this.store.clear();
    }
    /**
     * Make a clone of the instance
     * @param {?=} config Optional configuration
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForage(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
    /**
     * Gets an item from the storage library.
     * If the key does not exist, getItem() will return null.
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    getItem(key) {
        return this.store.getItem(key);
    }
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
    iterate(iteratee) {
        return this.store.iterate(iteratee);
    }
    /**
     * Get the name of a key based on its ID.
     * @param {?} index
     * @return {?}
     */
    key(index) {
        return this.store.key(index);
    }
    /**
     * Get the list of all keys in the datastore.
     * @return {?}
     */
    keys() {
        return this.store.keys();
    }
    /**
     * Gets the number of keys in the offline store (i.e. its “length”).
     * @return {?}
     */
    length() {
        return this.store.length();
    }
    /**
     * Even though localForage queues up all of its data API method calls,
     * ready() provides a way to determine whether the asynchronous driver initialization process has finished.
     * That’s useful in cases like when we want to know which driver localForage has settled down using.
     * @return {?}
     */
    ready() {
        return this.store.ready();
    }
    /**
     * Removes the value of a key from the offline store.
     * @param {?} key Data key
     * @return {?}
     */
    removeItem(key) {
        return this.store.removeItem(key);
    }
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
    setItem(key, data) {
        return this.store.setItem(key, data);
    }
    /**
     * Check whether the given driver is supported/registered.
     * @param {?} driver Driver name
     * @return {?}
     */
    supports(driver) {
        return this.store.supports((/** @type {?} */ (driver)));
    }
}
NgForage.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgForage.ngInjectableDef = defineInjectable({ factory: function NgForage_Factory() { return new NgForage(inject(NgForageConfig), inject(InstanceFactory)); }, token: NgForage, providedIn: "root" });
setToStringTag(NgForage);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class NgForageCache extends NgForage {
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
/** @nocollapse */ NgForageCache.ngInjectableDef = defineInjectable({ factory: function NgForageCache_Factory() { return new NgForageCache(inject(NgForageConfig), inject(InstanceFactory)); }, token: NgForageCache, providedIn: "root" });
setToStringTag(NgForageCache);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 */
class NgForageCacheDedicated extends NgForageCache {
    /**
     * @param {?=} config
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForageCacheDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
}
setToStringTag(NgForageCacheDedicated, 'NgForageCache (dedicated)');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 */
class NgForageDedicated extends NgForage {
    /**
     * @param {?=} config
     * @return {?}
     */
    clone(config) {
        /** @type {?} */
        const inst = new NgForageDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    }
}
setToStringTag(NgForageDedicated, 'NgForage (dedicated)');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
const conf$$1 = Symbol('NgForageConfig');
/**
 * \@internal
 * @type {?}
 */
const if$ = Symbol('InstanceFactory');
class DedicatedInstanceFactory {
    /**
     * @param {?} conf
     * @param {?} instFact
     */
    constructor(conf, instFact) {
        this[conf$$1] = conf;
        this[if$] = instFact;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    createCache(config) {
        /** @type {?} */
        const inst = new NgForageCacheDedicated(this[conf$$1], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    createNgForage(config) {
        /** @type {?} */
        const inst = new NgForageDedicated(this[conf$$1], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    }
}
DedicatedInstanceFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DedicatedInstanceFactory.ctorParameters = () => [
    { type: NgForageConfig },
    { type: InstanceFactory }
];
/** @nocollapse */ DedicatedInstanceFactory.ngInjectableDef = defineInjectable({ factory: function DedicatedInstanceFactory_Factory() { return new DedicatedInstanceFactory(inject(NgForageConfig), inject(InstanceFactory)); }, token: DedicatedInstanceFactory, providedIn: "root" });
setToStringTag(DedicatedInstanceFactory);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgForage core module
 */
class NgForageModule {
    // istanbul ignore next
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgForageModule,
            providers: [
                {
                    provide: DEFAULT_CONFIG,
                    useValue: config ? Object.assign({}, config) : {}
                }
            ]
        };
    }
}
NgForageModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DEFAULT_CONFIG, CachedItemImpl, NgForageCache, BaseConfigurableImpl, NgForageConfig, DedicatedInstanceFactory, NgForageCacheDedicated, NgForageDedicated, InstanceFactory, NgForage, NgForageModule, Driver };

//# sourceMappingURL=ngforage.js.map