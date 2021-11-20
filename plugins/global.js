/* import { mapMutations, mapState } from 'vuex';
import extend from '@/utils/extend-vue-app';
import debugGridOverlay from 'debug-grid-overlay';

export default async function ({ app }) {
	extend(app, {
		data: () => ({
			windowWidth: 0,
			windowHeight: 0,
		}),
		methods: {
			...mapMutations({
				'setBreakpoint': 'SET_BREAKPOINT',
			}),
			getCurrentBreakpoint() {
				return window.getComputedStyle(document.body, ':before')
					.getPropertyValue('content')
					.replace(/"/g, '')
					.replace('viewport-', '');
			},
			setDimensions() {
				this.windowWidth = window.innerWidth;
				this.windowHeight = window.innerHeight;

				const size = this.getCurrentBreakpoint();
				if (this.breakpoint !== size) {
					this.setBreakpoint(size);
				}
			},
			handleFirstTab(event) {
				if (event.keyCode === 9) {
					document.body.classList.add('user-is-tabbing');

					window.removeEventListener('keydown', this.handleFirstTab);
					window.addEventListener('mousedown', this.handleMouseDownOnce);
				}
			},
			handleMouseDownOnce() {
				document.body.classList.remove('user-is-tabbing');

				window.removeEventListener('mousedown', this.handleMouseDownOnce);
				window.addEventListener('keydown', this.handleFirstTab);
			},
		},
		computed: {
			...mapState([
				'breakpoint',
			]),
		},
		async mounted() {
			this.setDimensions();

			window.addEventListener('resize', () => {
				this.setDimensions();

				this.$root.$emit('resize', {
					width: this.windowWidth,
					height: this.windowHeight,
				});
			});

			window.addEventListener('scroll', () => {
				if (window.disableScroll) return;
				const scrollY = window.scrollY;
				if (this.scrollY !== scrollY) {
					this.scrollY = scrollY;
					this.$root.$emit('scroll', window.scrollY);
				}
			});

			window.addEventListener('keydown', this.handleFirstTab);

			// For dev only
			if (process.env.NODE_ENV === 'development') {
				const debugGrid = debugGridOverlay({
					columns: 12,
					gutterWidth: '20px',
					verticalRhythm: '1.95rem',
					marginsWidth: {
						'&': '28px',
						'min-width: 1024px': '60px',
					},
				});
				debugGrid.on('toggled', (visible) => {
					document.body.style.position = visible ? 'relative' : null;
					document.body.classList.toggle('debug-mode', visible);
				});
			}
		},
	});
} */