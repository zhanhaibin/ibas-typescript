﻿/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as bobas from "../../../ibas/bobas/index";

/**
 * 用户
 */
export class User extends bobas.BusinessObject<User>  {

    private _userCode: string;

    get userCode(): string {
        return this._userCode;
    }

    set userCode(value: string) {
        this._userCode = value;
    }

    protected init() {
    }
    criteria(): bobas.ICriteria {
        let criteria: bobas.ICriteria = new bobas.Criteria();
        let condition: bobas.ICondition = criteria.conditions.create();
        condition.alias = "userCode";
        condition.value = this.userCode;
        return criteria;
    }
    toString(): string {
        return bobas.strings.format("{user: {0}}", this.userCode);
    }
}