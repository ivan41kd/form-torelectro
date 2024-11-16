export type TProduct = {
	title: string;
	description: string;
	grounding: boolean;
	isProfessional: boolean;
	category: number;
	socket: string;
	variants: {
		variant: number;
		options: {
			article: number;
			plugs: string;
			length: string;
			security: string;
			power: string;
			socket: string;
			grounding: boolean;
		}[];
	}[];
	isSpec?: boolean;
	settings?: {
		isEco: boolean;
		isGost: boolean;
		temp: string;
	};
	isCatushka?: boolean;
	isPlastic?: boolean;
	isMetalic?: boolean;
	fulltitle?: string;
};
