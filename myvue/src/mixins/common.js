export default {
	data() {
		return {
			msg: 'erwerwe',
			form: {
				a: 'aaa'
			}
		}
	},
	filters: { //过滤器
		numToString(value) {
			return value.toString();
		}
	},
	created() { //钩子函数
		console.log('这是混入的组件')
	},
	computed: {   //计算属性
		ids() {
			return !this.loading
		}
	},
	methods: {
		exm() {
			console.log('这是混入的exm方法')
		},
		clickFn() {
			console.log(this.msg)
		},

		// 其它属性方法......
	}
}