'use client';
//* Libraries imports
import {useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

/**
 * useTheme hook to get the current theme of the browser
 */

export default function useTheme(updateCallback?: (theme: Theme) => void) {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		// Check if the browser is in dark mode
		const darkModeMediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);

		const updateTheme = () => {
			const theme = darkModeMediaQuery.matches ? 'dark' : 'light';
			setTheme(theme);
			updateCallback && updateCallback(theme);
		};

		// Initialize theme
		updateTheme();

		// Listen for changes in dark mode preference
		darkModeMediaQuery.addEventListener('change', updateTheme);

		// Cleanup event listener on component unmount
		return () => {
			darkModeMediaQuery.removeEventListener('change', updateTheme);
		};
	}, []);

	return theme;
}
