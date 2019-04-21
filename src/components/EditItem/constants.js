// 象限标识
// 第一
export const QUADRANT_FIRST = 1;
// 第二
export const QUADRANT_SECOND = 2;
// 第三
export const QUADRANT_THREE = 3;
// 第四
export const QUADRANT_FOUR = 4;

// 标识控制点
export const POINT_LEFT = 'l';
export const POINT_RIGHT = 'r';
export const POINT_TOP = 't';
export const POINT_BOTTOM = 'b';
export const POINT_LEFT_CENTER = 'lc';
export const POINT_RIGHT_CENTER = 'rc';
export const POINT_TOP_CENTER = 'tc';
export const POINT_BOTTOM_CENTER = 'bc';

// action type
// 移动整个框
export const ALL_ITEM = 'ALL_ITEM';
// 开始移动
export const MOVE_START = 'MOVE_START';
// 移动结束
export const MOVE_END = 'MOVE_END';
// 移动取消
export const MOVE_CHANGE = 'MOVE_CHANGE';
// 创建编辑框初始配置
export const CREATE_ITEM_STORE = 'CREATE_ITEM_STORE';
// 重置内容高度
export const RESET_CONTENT_HEIGHT = 'RESET_CONTENT_HEIGHT';
// 改变当前激活的编辑框标识
export const CHANGE_ACTIVE_EDIT_KEY = 'CHANGE_ACTIVE_EDIT_KEY';
// 添加额外属性
export const ADD_ITEM_ATTRS = 'ADD_ITEM_ATTRS';
// 改变额外属性
export const CHANGE_ITEM_ATTR = 'CHANGE_ITEM_ATTR';
// 改变基础几何属性
export const CHANGE_ITEM_BASE_STYLE = 'CHANGE_ITEM_BASE_STYLE';

// 组件类型
// 文本
export const COMPONENT_TYPE_TEXT = 'COMPONENT_TYPE_TEXT';
// 图片
export const COMPONENT_TYPE_PICTURE = 'COMPONENT_TYPE_PICTURE';

// 组件设置
export const COMPONENT_STYLE_WIDHT = 'width';
export const COMPONENT_STYLE_HEIGHT = 'height';
export const COMPONENT_STYLE_TOP = 'top';
export const COMPONENT_STYLE_LEFT = 'left';