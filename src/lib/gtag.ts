import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';

export const pageview = (url: string) => {
	window.gtag('config', PUBLIC_GA_MEASUREMENT_ID, {
		page_path: url
	});
};

export const event = ({
	action,
	category,
	label,
	value
}: {
	action: string;
	category: string;
	label: string;
	value?: number;
}) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};

// Type declaration for gtag
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}
