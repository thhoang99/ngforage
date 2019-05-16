import { NgForageCache } from '../cache/ng-forage-cache.service';
import { NgForageConfig } from '../config/ng-forage-config.service';
import { NgForageOptions } from '../config/ng-forage-options';
import { InstanceFactory } from '../instance-factory/instance-factory.service';
import { NgForage } from '../main/ng-forage.service';
import * as ɵngcc0 from '@angular/core';
export declare class DedicatedInstanceFactory {
    constructor(conf: NgForageConfig, instFact: InstanceFactory);
    createCache(config?: NgForageOptions): NgForageCache;
    createNgForage(config?: NgForageOptions): NgForage;
    static ngInjectableDef: ɵngcc0.ΔInjectableDef<DedicatedInstanceFactory>;
}

//# sourceMappingURL=dedicated-instance-factory.service.d.ts.map