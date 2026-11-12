import { PageMetaInfo } from '../../../types/pageMeta.js';
import { EvershopRequest } from '../../../types/request.js';
export declare function setPageMetaInfo(request: EvershopRequest, info: Partial<PageMetaInfo>): void;
export declare function getPageMetaInfo(request: EvershopRequest): PageMetaInfo;
