import request from "../utils/axios";

interface ResponseType<D = any> {
  config?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText: string;
  data: D;
}

/**
 * 获取英雄联盟所有英雄基本信息
 */

interface ResHerosInfo {
  fileName: string;
  fileTime: string;
  version: string;
  hero: HerosInfo[];
}

export interface HerosInfo {
  alias: string; // 英文名
  attack: string;
  banAudio: string;
  camp: string;
  campId: string; // id
  changeLabel: string;
  couponPrice: string;
  defense: string;
  difficulty: string;
  goldPrice: string;
  heroId: string;
  isARAMweekfree: string;
  isWeekFree: string;
  ispermanentweekfree: string;
  keywords: string;
  magic: string;
  name: string; // 昵称
  roles: string[];
  selectAudio: string;
  title: string; // 中文名
}

export const GetHerosInfoAPI = () => {
  return request<ResponseType<ResHerosInfo>>({
    url: "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2766120",
    method: "get",
  });
};
