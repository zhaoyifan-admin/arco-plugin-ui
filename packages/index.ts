import './less/global.less'
import './less/iconfont.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  dateFormat,
  requestAnimationFrame,
  cancelAnimationFrame,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  formatNumber,
  toggleDark,
  gps84_To_Gcj02,
  gcj02_To_Gps84,
  gps84_To_bd09,
  bd09_To_gps84,
  gcj02_To_Bd09,
} from './utils'
import type { App } from 'vue'
import Alert from './alert'
import Avatar from './avatar'
import BackTop from './backtop'
import Badge from './badge'
import Breadcrumb from './breadcrumb'
import ehButton from './button'
import ehButtonGroup from './button'
import Card from './card'
import Cascader from './cascader'
import Checkbox from './checkbox'
import Col from './col'
import Countdown from './countdown'
import DatePicker from './datepicker'
import Descriptions from './descriptions'
import DescriptionsItem from './descriptionsitem'
import Divider from './divider'
import Drawer from './drawer'
import Ellipsis from './ellipsis'
import Empty from './empty'
import Flex from './flex'
import Input from './input'
import InputNumber from './inputnumber'
import Message from './message'
import Notification from './notification'
import NumberAnimation from './numberanimation'
import Pagination from './pagination'
import Popconfirm from './popconfirm'
import Progress from './progress'
import QRCode from './qrcode'
import Radio from './radio'
import Rate from './rate'
import ehResult from './result'
import Row from './row'
import Select from './select'
import Slider from './slider'
import Space from './space'
import Statistic from './statistic'
import Steps from './steps'
import Swiper from './swiper'
import Switch from './switch'
import ehTable from './table'
import Tabs from './tabs'
import Tag from './tag'
import Textarea from './textarea'
import TextScroll from './textscroll'
import Timeline from './timeline'
import Tooltip from './tooltip'
import Video from './video'
import i18n from "./utils/local";
export interface InstallationOptions {
  locale?: any,
  i18n?: any,
  size?: string
}
// 所有组件列表
const components = [
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  ehButton,
  ehButtonGroup,
  Card,
  Cascader,
  Checkbox,
  Col,
  Countdown,
  DatePicker,
  Descriptions,
  DescriptionsItem,
  Divider,
  Drawer,
  Ellipsis,
  Empty,
  Flex,
  Input,
  InputNumber,
  Message,
  Notification,
  NumberAnimation,
  Pagination,
  Popconfirm,
  Progress,
  QRCode,
  Radio,
  Rate,
  ehResult,
  Row,
  Select,
  Slider,
  Space,
  Statistic,
  Steps,
  Swiper,
  Switch,
  ehTable,
  Tabs,
  Tag,
  Textarea,
  TextScroll,
  Timeline,
  Tooltip,
  Video
]
// 定义 install 方法
const install = (app: App, options?: InstallationOptions): void => {
  // 国际化
  i18n.global.locale = options?.locale || 'zh-CN';
  // 遍历注册所有组件
  /*
    component.__name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(<string>component.__name) 或 as语法(component.__name as string)
  */
  components.forEach(component => app.component(component.__name as string, component))
}

export {
  dateFormat,
  requestAnimationFrame,
  cancelAnimationFrame,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  formatNumber,
  toggleDark,
  gps84_To_Gcj02,
  gcj02_To_Gps84,
  gps84_To_bd09,
  bd09_To_gps84,
  gcj02_To_Bd09,
}
export {
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  ehButton,
  ehButtonGroup,
  Card,
  Cascader,
  Checkbox,
  Col,
  Countdown,
  DatePicker,
  Descriptions,
  DescriptionsItem,
  Divider,
  Drawer,
  Ellipsis,
  Empty,
  Flex,
  Input,
  InputNumber,
  Message,
  Notification,
  NumberAnimation,
  Pagination,
  Popconfirm,
  Progress,
  QRCode,
  Radio,
  Rate,
  ehResult,
  Row,
  Select,
  Slider,
  Space,
  Statistic,
  Steps,
  Swiper,
  Switch,
  ehTable,
  Tabs,
  Tag,
  Textarea,
  TextScroll,
  Timeline,
  Tooltip,
  Video
}
AOS.init({
  duration: 1500,
  easing: 'ease-in-out-back',
});
const VueArcoUI = {
  install,
}
export default VueArcoUI
