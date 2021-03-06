/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * 模块索引文件，此文件集中导出类
 */

export * from "./Message.d";
export * from "./Message";
export * from "./Logger.d";
export * from "./Logger";

import { Logger } from "./Logger";
export const logger: Logger = function (): Logger {
    if ((<any>window).ibas === undefined) {
        (<any>window).ibas = {
            url: "https://github.com/color-coding/ibas-typescript",
            author: "niuren.zhu"
        };
    }
    if ((<any>window).ibas.logger === undefined) {
        (<any>window).ibas.logger = new Logger();
    }
    return (<any>window).ibas.logger;
}();
