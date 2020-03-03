import ajax from "./ajax";
//根据经纬度获取位置详情
export const reqAddress = (geohash) =>ajax(`/position/${geohash}`)
//获取食物分类列表
export const reqFoodTypes = () =>ajax('/index_category')
//根据经纬度获取商铺列表
export const reqAddress = (longitude,latitude) =>ajax('/shop',{longitude,latitude})