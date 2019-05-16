import * as lf from 'localforage';
import lf__default, {  } from 'localforage';
import { __values, __extends } from 'tslib';
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
var  /**
 * \@internal
 * @template T
 */
CachedItemImpl = /** @class */ (function () {
    function CachedItemImpl(data, expiryTime) {
        this.data = data;
        this.expires = new Date(typeof (/** @type {?} */ (expiryTime)) === 'number' ? expiryTime : 0);
    }
    Object.defineProperty(CachedItemImpl.prototype, "expired", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.expiresIn === 0;
            if (value) {
                Object.defineProperty(this, 'expired', { value: value });
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedItemImpl.prototype, "expiresIn", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = Math.max(0, this.expires.getTime() - Date.now());
            if (!value) {
                Object.defineProperty(this, 'expiresIn', { value: value });
            }
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CachedItemImpl.prototype, "hasData", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.data != null;
            Object.defineProperty(this, 'hasData', { value: value });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CachedItemImpl.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            data: this.data,
            expired: this.expired,
            expires: this.expires,
            expiresIn: this.expiresIn,
            hasData: this.hasData
        };
    };
    /**
     * @return {?}
     */
    CachedItemImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.toJSON());
    };
    return CachedItemImpl;
}());
setToStringTag(CachedItemImpl, 'CachedItem');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
var localForage = 'defineDriver' in lf ? lf : lf__default;

var e_1, _a;
/** @enum {string} */
var Driver = {
    /** The IndexedDB driver */
    INDEXED_DB: (/** @type {?} */ (localForage.INDEXEDDB)),
    /** The localStorage driver */
    LOCAL_STORAGE: (/** @type {?} */ (localForage.LOCALSTORAGE)),
    /** The WebSQL driver */
    WEB_SQL: (/** @type {?} */ (localForage.WEBSQL)),
};
try {
    for (var _b = __values([localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var d = _c.value;
        delete Driver[d];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
Object.freeze(Driver);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = new InjectionToken('Default NgForage config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return localForage.defineDriver(spec);
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
    /** @nocollapse */ NgForageConfig.ngInjectableDef = defineInjectable({ factory: function NgForageConfig_Factory() { return new NgForageConfig(inject(DEFAULT_CONFIG, 8)); }, token: NgForageConfig, providedIn: "root" });
    return NgForageConfig;
}());
setToStringTag(NgForageConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
var stores = {};
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
var conf$ = Symbol('Config');
/**
 * Creates localForage instances
 */
var InstanceFactory = /** @class */ (function () {
    /** @internal */
    function InstanceFactory(conf) {
        this[conf$] = conf;
    }
    /**
     * @param {?} cfg
     * @return {?}
     */
    InstanceFactory.prototype.getInstance = /**
     * @param {?} cfg
     * @return {?}
     */
    function (cfg) {
        cfg = Object.assign({}, this[conf$].config, cfg || {});
        /** @type {?} */
        var hash = getHash(cfg);
        if (!stores[hash]) {
            stores[hash] = localForage.createInstance(cfg);
        }
        return stores[hash];
    };
    InstanceFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InstanceFactory.ctorParameters = function () { return [
        { type: NgForageConfig }
    ]; };
    /** @nocollapse */ InstanceFactory.ngInjectableDef = defineInjectable({ factory: function InstanceFactory_Factory() { return new InstanceFactory(inject(NgForageConfig)); }, token: InstanceFactory, providedIn: "root" });
    return InstanceFactory;
}());
setToStringTag(InstanceFactory);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
var store$ = Symbol('Store');
/**
 * Abstract service-level configuration layer for NgForage
 * @abstract
 */
var BaseConfigurableImpl = /** @class */ (function () {
    /** @internal */
    function BaseConfigurableImpl(config, instanceFactory) {
        /**
         * \@internal
         */
        this.config = {};
        this.baseConfig = config;
        this.fact = instanceFactory;
    }
    Object.defineProperty(BaseConfigurableImpl.prototype, "description", {
        /**
         * A description of the database, essentially for developer usage.
         * @default ""
         */
        get: /**
         * A description of the database, essentially for developer usage.
         * \@default ""
         * @return {?}
         */
        function () {
            return this.config.description || this.baseConfig.description;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.description = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "driver", {
        /**
         * The preferred driver(s) to use.
         * @default IndexedDB, WebSQL and localStorage
         */
        get: /**
         * The preferred driver(s) to use.
         * \@default IndexedDB, WebSQL and localStorage
         * @return {?}
         */
        function () {
            return this.config.driver || this.baseConfig.driver;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.driver = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "name", {
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
            return this.config.name || this.baseConfig.name;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.name = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "size", {
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
            return this.config.size || this.baseConfig.size;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.size = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "storeName", {
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
            return this.config.storeName || this.baseConfig.storeName;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.storeName = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "version", {
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
            return 'version' in this.config ? (/** @type {?} */ (this.config.version)) : this.baseConfig.version;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.config.version = v;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "finalConfig", {
        /** @internal */
        get: /**
         * \@internal
         * @protected
         * @return {?}
         */
        function () {
            return Object.assign({}, this.baseConfig.config, this.config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseConfigurableImpl.prototype, "store", {
        /** @internal */
        get: /**
         * \@internal
         * @protected
         * @return {?}
         */
        function () {
            if (this.storeNeedsRecalc || !this[store$]) {
                this[store$] = this.fact.getInstance(this.finalConfig);
                this.storeNeedsRecalc = false;
            }
            return this[store$];
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
    BaseConfigurableImpl.prototype.configure = /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    function (opts) {
        opts = opts || {};
        if (Array.isArray(opts.driver)) {
            opts.driver = opts.driver.slice();
        }
        Object.assign((/** @type {?} */ (this)).config, opts);
        (/** @type {?} */ (this)).storeNeedsRecalc = true;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    BaseConfigurableImpl.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    };
    /**
     * @return {?}
     */
    BaseConfigurableImpl.prototype.toString = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.toJSON());
    };
    /** @nocollapse */
    BaseConfigurableImpl.ctorParameters = function () { return [
        { type: NgForageConfig, decorators: [{ type: Inject, args: [NgForageConfig,] }] },
        { type: InstanceFactory, decorators: [{ type: Inject, args: [InstanceFactory,] }] }
    ]; };
    return BaseConfigurableImpl;
}());
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
var NgForage = /** @class */ (function (_super) {
    __extends(NgForage, _super);
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
    /** @nocollapse */ NgForage.ngInjectableDef = defineInjectable({ factory: function NgForage_Factory() { return new NgForage(inject(NgForageConfig), inject(InstanceFactory)); }, token: NgForage, providedIn: "root" });
    return NgForage;
}(BaseConfigurableImpl));
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
        data: mainKey + "_data",
        expiry: mainKey + "_expiry"
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
var NgForageCache = /** @class */ (function (_super) {
    __extends(NgForageCache, _super);
    function NgForageCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NgForageCache.prototype, "cacheTime", {
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
            return this.config.cacheTime || this.baseConfig.cacheTime;
        },
        set: /**
         * @param {?} t
         * @return {?}
         */
        function (t) {
            this.config.cacheTime = t;
            this.storeNeedsRecalc = true;
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    /**
     * @inheritDoc
     * @param {?=} config
     * @return {?}
     */
    NgForageCache.prototype.clone = /**
     * @inheritDoc
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageCache(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    /**
     * Retrieve data
     * @param key Data key
     */
    /**
     * Retrieve data
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    NgForageCache.prototype.getCached = /**
     * Retrieve data
     * @template T
     * @param {?} key Data key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keys = calculateCacheKeys(key);
        /** @type {?} */
        var dataPromise = this.getItem(keys.data);
        /** @type {?} */
        var expiryPromise = this.getItem(keys.expiry);
        return Promise.all([dataPromise, expiryPromise]).then(toCachedItem);
    };
    /**
     * Remove data
     * @param key Data key
     */
    /**
     * Remove data
     * @param {?} key Data key
     * @return {?}
     */
    NgForageCache.prototype.removeCached = /**
     * Remove data
     * @param {?} key Data key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keys = calculateCacheKeys(key);
        /** @type {?} */
        var dataPromise = this.removeItem(keys.data);
        /** @type {?} */
        var expiryPromise = this.removeItem(keys.expiry);
        return Promise.all([dataPromise, expiryPromise]).then(toVoid);
    };
    /**
     * Set data
     * @param key Data key
     * @param data Data to set
     * @param [cacheTime] Override cache set in {@link CacheConfigurable#cacheTime global or instance config}.
     */
    /**
     * Set data
     * @template T
     * @param {?} key Data key
     * @param {?} data Data to set
     * @param {?=} cacheTime
     * @return {?}
     */
    NgForageCache.prototype.setCached = /**
     * Set data
     * @template T
     * @param {?} key Data key
     * @param {?} data Data to set
     * @param {?=} cacheTime
     * @return {?}
     */
    function (key, data, cacheTime) {
        /** @type {?} */
        var keys = calculateCacheKeys(key);
        /** @type {?} */
        var expiry = typeof cacheTime === 'number' ? cacheTime : this.cacheTime;
        /** @type {?} */
        var dataPromise = this.setItem(keys.data, data);
        /** @type {?} */
        var expiryPromise = this.setItem(keys.expiry, Date.now() + expiry);
        return Promise.all([dataPromise, expiryPromise]).then(head);
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    NgForageCache.prototype.toJSON = /**
     * \@internal
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ass = { cacheTime: this.cacheTime };
        return Object.assign(_super.prototype.toJSON.call(this), ass);
    };
    NgForageCache.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgForageCache.ngInjectableDef = defineInjectable({ factory: function NgForageCache_Factory() { return new NgForageCache(inject(NgForageConfig), inject(InstanceFactory)); }, token: NgForageCache, providedIn: "root" });
    return NgForageCache;
}(NgForage));
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
var  /**
 * \@internal
 */
NgForageCacheDedicated = /** @class */ (function (_super) {
    __extends(NgForageCacheDedicated, _super);
    function NgForageCacheDedicated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgForageCacheDedicated.prototype.clone = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageCacheDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    return NgForageCacheDedicated;
}(NgForageCache));
setToStringTag(NgForageCacheDedicated, 'NgForageCache (dedicated)');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 */
var  /**
 * \@internal
 */
NgForageDedicated = /** @class */ (function (_super) {
    __extends(NgForageDedicated, _super);
    function NgForageDedicated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgForageDedicated.prototype.clone = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageDedicated(this.baseConfig, this.fact);
        inst.configure(Object.assign(this.finalConfig, config || {}));
        return inst;
    };
    return NgForageDedicated;
}(NgForage));
setToStringTag(NgForageDedicated, 'NgForage (dedicated)');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
var conf$$1 = Symbol('NgForageConfig');
/**
 * \@internal
 * @type {?}
 */
var if$ = Symbol('InstanceFactory');
var DedicatedInstanceFactory = /** @class */ (function () {
    function DedicatedInstanceFactory(conf, instFact) {
        this[conf$$1] = conf;
        this[if$] = instFact;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DedicatedInstanceFactory.prototype.createCache = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageCacheDedicated(this[conf$$1], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    DedicatedInstanceFactory.prototype.createNgForage = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageDedicated(this[conf$$1], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    };
    DedicatedInstanceFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DedicatedInstanceFactory.ctorParameters = function () { return [
        { type: NgForageConfig },
        { type: InstanceFactory }
    ]; };
    /** @nocollapse */ DedicatedInstanceFactory.ngInjectableDef = defineInjectable({ factory: function DedicatedInstanceFactory_Factory() { return new DedicatedInstanceFactory(inject(NgForageConfig), inject(InstanceFactory)); }, token: DedicatedInstanceFactory, providedIn: "root" });
    return DedicatedInstanceFactory;
}());
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
var NgForageModule = /** @class */ (function () {
    function NgForageModule() {
    }
    // istanbul ignore next
    // istanbul ignore next
    /**
     * @param {?=} config
     * @return {?}
     */
    NgForageModule.forRoot = 
    // istanbul ignore next
    /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgForageModule,
            providers: [
                {
                    provide: DEFAULT_CONFIG,
                    useValue: config ? Object.assign({}, config) : {}
                }
            ]
        };
    };
    NgForageModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return NgForageModule;
}());

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