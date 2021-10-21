module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'\\.(ts|js)x?$': 'babel-jest',
	},
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	setupFiles: ['<rootDir>/__tests__/setup.ts'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
