/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { localForage as lf } from '../imports/localforage';
/** @enum {string} */
const Driver = {
    /** The IndexedDB driver */
    INDEXED_DB: (/** @type {?} */ (lf.INDEXEDDB)),
    /** The localStorage driver */
    LOCAL_STORAGE: (/** @type {?} */ (lf.LOCALSTORAGE)),
    /** The WebSQL driver */
    WEB_SQL: (/** @type {?} */ (lf.WEBSQL)),
};
export { Driver };
for (const d of [lf.INDEXEDDB, lf.LOCALSTORAGE, lf.WEBSQL]) {
    delete Driver[d];
}
Object.freeze(Driver);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2ZvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9taXNjL2RyaXZlci5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsV0FBVyxJQUFJLEVBQUUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7SUFHdkQsMkJBQTJCO0lBQzNCLFlBQWEsbUJBQUssRUFBRSxDQUFDLFNBQVMsRUFBQTtJQUM5Qiw4QkFBOEI7SUFDOUIsZUFBZ0IsbUJBQUssRUFBRSxDQUFDLFlBQVksRUFBQTtJQUNwQyx3QkFBd0I7SUFDeEIsU0FBVSxtQkFBSyxFQUFFLENBQUMsTUFBTSxFQUFBOzs7QUFHMUIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDMUQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbEI7QUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2NhbEZvcmFnZSBhcyBsZn0gZnJvbSAnLi4vaW1wb3J0cy9sb2NhbGZvcmFnZSc7XG5cbmV4cG9ydCBlbnVtIERyaXZlciB7XG4gIC8qKiBUaGUgSW5kZXhlZERCIGRyaXZlciAqL1xuICBJTkRFWEVEX0RCID0gPGFueT5sZi5JTkRFWEVEREIsXG4gIC8qKiBUaGUgbG9jYWxTdG9yYWdlIGRyaXZlciAqL1xuICBMT0NBTF9TVE9SQUdFID0gPGFueT5sZi5MT0NBTFNUT1JBR0UsXG4gIC8qKiBUaGUgV2ViU1FMIGRyaXZlciAqL1xuICBXRUJfU1FMID0gPGFueT5sZi5XRUJTUUxcbn1cblxuZm9yIChjb25zdCBkIG9mIFtsZi5JTkRFWEVEREIsIGxmLkxPQ0FMU1RPUkFHRSwgbGYuV0VCU1FMXSkge1xuICBkZWxldGUgRHJpdmVyW2RdO1xufVxuXG5PYmplY3QuZnJlZXplKERyaXZlcik7XG4iXX0=