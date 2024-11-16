import { Consultation } from '../../widgets/consultation';
import { Information } from '../../widgets/information';
import { Catalog } from '../../widgets/catalog';
import { Footer } from '../../widgets/footer';
import { Header } from '../../widgets/header';
import { Nuaces } from '../../widgets/nuaces';
import { Hero } from '../../widgets/hero';
import { Faq } from '../../widgets/faq';
import { Presentation } from '~@/widgets/presentation';

export function RootPage() {
	return (
		<>
			<Header />
			<main className='main'>
				<Hero />
				<Catalog />
				<Presentation />
				<Information />
				<Consultation />

				<Faq />
				<Nuaces />
			</main>
			<Footer />
		</>
	);
}
