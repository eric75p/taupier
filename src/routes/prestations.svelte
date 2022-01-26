<!-- ---------------- script --------------- -->
<script>
	import { Accordion, AccordionItem } from "sveltestrap";
	import { Button } from "sveltestrap";
	import { goto } from '$app/navigation';

	function gotoDevis() {
		goto("/devis")
	}
</script>

<!-- ---------------- markup --------------- -->
<svelte:head>
	<title>Taupier du Sud • Prestations</title>
</svelte:head>

<article class="p-2">
	<h1>Prestations</h1>
	<br />

	<p>
		Assez de voir des monticules de terre dans votre jardin ? Les taupes ont
		élu domicile dans votre jardin et vous avez tout essayé pour vous en
		débarrasser vous-même ?
	</p>

	<p>
		Ultrasons, pétards, produits toxiques, conseils de grands-mères et
		autres répulsifs… Une majeure partie des gens concernés par les taupes
		ont tout d’abord essayé toutes ces choses avant de s’en remettre à un
		taupier professionnel.
	</p>

	<p>
		Ne perdez plus votre temps et votre argent dans des solutions anti-taupe
		illusoires. Il n’existe qu’une solution 100% efficace : faire appel à
		Taupier du sud.
	</p>

	<p>
		En finir avec les taupes, Taupier du sud : <span
			style="font-style: italic"
			>La meilleure solution pour des terrains esthétiques et praticables
			toute l’année</span
		>.
	</p>

	<h2>Interventions sur demande</h2>
	<hr />

	<h3>
		Mairies et collectivités<span class="charset">
			&nbsp;&#127794;&nbsp;&#9917;&nbsp;&#127945;</span
		>
	</h3>

	<Accordion>
		<AccordionItem>
			<h4 class="m-0" slot="header">Gazon, pelouse, espaces verts</h4>
			L’aspect visuel joue bien sûr son rôle dans les espaces verts.
		</AccordionItem>

		<AccordionItem>
			<h4 class="m-0" slot="header">Terrains de sport et de loisir</h4>
			<p>
				Si vous possédez un terrain de foot, un terrain de rugby ou
				encore un terrain de golf, vous connaissez l’importance d’un
				gazon de qualité. Qualité largement dégradée lors de
				l’apparition des taupinières qui accompagne les galeries formées
				par les taupes.
			</p>
			<p>
				Au-delà de rendre la pratique du sport en question quasiment
				impossible, ces taupinières sont également très dangereuses pour
				les chevilles des joueurs ! Afin d’éviter un quelconque
				accident, il est primordial de traiter ces terrains de sport de
				manière efficace et durable et cela en faisant appel à un
				taupier écologique professionnel.
			</p>
		</AccordionItem>
	</Accordion>

	<h3>
		Entreprises diverses&nbsp;<span class="charset">
			&#127948;&nbsp;&#127957;&nbsp;&#127976;</span
		>
	</h3>

	<Accordion>
		<AccordionItem>
			<h4 class="m-0" slot="header">
				Gîtes, green/golf, gazon, pelouse, espaces verts
			</h4>
			<p>
				Vous possédez un bâtiment historique, un parc arboré, des
				jardins publics ou une entreprise entourée de verdure ? Vous
				gérez un golf, un terrain de foot, de rugby ou un centre
				équestre ? Les taupes détruisent vos aménagement paysagers et
				plantations.
			</p>

			<p>
				Vous connaissez l’importance d’une pelouse parfaite ou d’un
				terrain parfaitement adapté à l’exercice de votre activité, à la
				sécurité, au confort et au bien-être de vos clients.
			</p>

			<p>
				Au-delà des aspects esthétiques, les taupinières peuvent
				également nuire au bon déroulement de vos activités et gêner le
				passage des engins de tonte, les pierres et la terre dans les
				taupinières peuvent endommager par exemple les tondeuses à
				gazon.
			</p>
		</AccordionItem>

		<AccordionItem>
			<h4 class="m-0" slot="header">Camping</h4>
			<p>
				Pour la bonne tenue d’un camping, la présence de taupes n’est
				pas souhaitable, pour la circulation des campeurs sur les zones
				enherbées, les jeux, loisirs et surtout pour le confort des
				campeurs en tente. Une partie de football bien engagée, un
				enfant qui court sans regarder où il pose le pied, une
				inattention de votre part et c’est l’entorse assurée !
			</p>

			<p style="font-style: italic;">
				Au moment du petit déjeuner avec ses amis campeurs, Théo raconte
				le cauchemar, digne d’un film d’horreur, qu’il a fait cette nuit
				là. Il se voyait dévorer le ventre par un affreux monstre et il
				s’avéra que ce cauchemar était partiellement vrai car il dormait
				sur le ventre dans sa tente, sans matelas le sol étant sans
				aspérité. Mais dans la nuit une taupe énervée chercha à remonter
				la terre qu’elle creusait dans l’une de ses galeries. Le pauvre
				animal grattait de toutes ses forces pour soulever la terre
				juste au niveau du ventre du campeur qui faisait poids sur elle
				ce qui procura à Théo de drôles de sensations en raison de la
				pression, alimentant ainsi le récit cauchemardesque de Théo.
			</p>
		</AccordionItem>
	</Accordion>

	<h3>
		Entreprise agricoles <span class="charset">
			&#128004;&nbsp;&#128017;&nbsp;&#128668;&nbsp;&#129365;</span
		>
	</h3>

	<Accordion>
		<AccordionItem>
			<h4 class="m-0" slot="header">
				Prairie/verger, horticulteurs, pépiniéristes, maraîchers
			</h4>
			<p>
				Si vous êtes, par exemple maraîcher ou si vous possédez un
				potager, la taupe en elle-même ne représente pas un risque pour
				vos cultures mais les taupinières quant à elles rendent vos
				terres incultivables. En effet, la terre est remuée et retournée
				régulièrement ce qui entrave la pousse de vos semis. Il est même
				possible que la taupe avale les graines semées lorsqu’elle
				creuse ses galeries.
			</p>

			<p>
				Dégradation du matériel de fauche, la casse du matériel
				d’exploitation et/ou d’entretien peuvent s’avérer important
				selon la densité des buttes.
			</p>

			<p>
				Des dégâts sur les jeunes plantations, semis et petites plantes
				doivent être évoqués. Après la colonisation d’un site, les
				galeries de taupe on pour conséquence néfaste de véhiculer
				souris, mulots et autres rats taupiers (campagnols terrestres)
				qui à leur tour s’attaquent aux plantes, aux arbres fruitiers et
				aux fourrages, un véritable fléau.
			</p>

			<p>
				Quelques rares percements de digues ont été signalés mais sans
				commune mesure avec des nuisibles de type ragondin.
			</p>
		</AccordionItem>

		<AccordionItem>
			<h4 class="m-0" slot="header">Éleveurs /agriculteurs</h4>
			<p>
				La terre se mélangeant avec les récoltes (ensilage, enrubannage,
				foin) est vecteur de maladies. Les taupes sont également
				détestées par les agriculteurs, là où l’ensilage est cultivé, la
				présence de taupinières peut souvent contenir une bactérie née
				dans le sol appelée <span style="font-style: italic;"
					>clostridium</span
				>. Cette bactérie présente dans les taupinières qui sont
				rassemblées avec l’herbe pendant la production d’ensilage
				peuvent la contaminer et ainsi la transmettre la listeria aux
				bovins et aux ovins, pour laquelle il n’existe aucun remède et
				dont un cas sur trois est mortel.
			</p>

			<p>
				Le lait : le contact prolongé du foin avec la terre rejetée par
				les taupes participe à la fermentation butyrique des ensilages
				au même titre que les déjections animales, etc. Les conséquences
				sur la production laitière peuvent être désastreuses, un lait
				trop concentré en acide butyrique (ou butanoïque) est
				immédiatement refusé par les fabricants de fromage.
			</p>

			<p>
				Sur les pâturages, les taupinières tuent l’herbe en dessous
				d’elles et les graines de mauvaises herbes s’enracinent très
				rapidement dans le sol fraîchement retourné, ce qui réduit à son
				tour la quantité d’herbe disponible et réduit considérablement
				les pâturages disponibles pour le bétail. Les taupinières
				peuvent également réduire le rendement global des fermes arables
				en perturbant les systèmes racinaires et en privant les plantes
				d’humidité.
			</p>

			<p>
				De même, les propriétaires de chevaux et de poneys sont
				également touchés. Si un tunnel de taupe s’effondre sous le pied
				d’un animal, cela peut entraîner une facture vétérinaire
				coûteuse et, dans certains cas, aboutir à l’abattage de
				l’animal.
			</p>
		</AccordionItem>
	</Accordion>

	<h3>
		Entreprises équestres<span class="charset"
			>&nbsp;&#128052;&nbsp;&#127943;</span
		>
	</h3>

	<Accordion>
		<AccordionItem>
			<h4 class="m-0" slot="header">Hippodromes</h4>
			<p>
				Neutralisation des taupes sur les hippodromes, pistes, parcours
				d’obstacles, avec pour objectif d’éradiquer les taupes présentes
				sur ce domaine. Neutralisation dans le but d’éviter le risque
				que les chevaux de course ou d’obstacles ne se blessent à cause
				des galeries de taupes et des taupinières sur le circuit et de
				redonner à la pelouse son plus bel éclat.
			</p>
		</AccordionItem>

		<AccordionItem>
			<h4 class="m-0" slot="header">
				Haras, centres équestres, paddocks
			</h4>

			<p>
				Ici encore, laisser les taupinières se multiplier sur le terrain
				de votre centre équestre peut avoir des conséquences
				désastreuses pour vos chevaux et donc pour vous-même. Le cheval
				est enclin à se coincer la jambe et à se la casser en
				l’enfonçant dans une taupinière. Cela peut également entraîner
				une mauvaise chute pour le cavalier qui accompagne l’animal. Il
				est donc primordial de se débarrasser de ces taupinières et donc
				des taupes rapidement…
			</p>

			<p style="font-style: italic">
				La taupe a été nommée par les Jacobites comme le « petit
				monsieur en velours noir », car il a provoqué la mort de leur
				ennemi, le roi Guillaume III d’Angleterre (1689-1702). En
				février 1702, William chevauchait à Hampton Court lorsque son
				cheval trébucha sur une taupinière et le jeta, lui cassant la
				clavicule. Cependant, il a insisté pour retourner au palais de
				Kensington, ce qui a aggravé son état. Quelques jours plus tard,
				il devint fiévreux et mourut finalement le 8 mars 1702.<br />
				“Si le roi avait fait plus attention à l'entretien de son herbe,
				il ne serait pas mort à 52 ans.”
			</p>
		</AccordionItem>
	</Accordion>

	<h3>
		Particuliers&nbsp;<span class="charset">
			&#127969;&nbsp;&#127803;&nbsp;&#127984;</span
		>
	</h3>
	<Accordion>
		<AccordionItem>
			<h4 class="m-0" slot="header">
				Gazon, pelouse, potager, jardin, parc de château, patrimoine
				historique
			</h4>
			<p>
				Vous possédez un château, des jardins ou espaces verts ouverts
				au public ou non. L’importance esthétique de vos terrains est
				donc l’une de vos préoccupations. Et si les taupes elles aussi
				s’invitent sur vos terrains en semant leurs taupinières partout
				sur leur passage, elles vont clairement entraver l’esthétique
				des lieux. Pour de vastes étendues d’herbe, la solution la plus
				rapide et efficace et de faire appel à Taupier du sud.
			</p>
		</AccordionItem>

		<AccordionItem>
			<h4 class="m-0" slot="header">Semis de printemps ou d’hiver</h4>
			<p>
				Si vous venez de faire un nouveau gazon celui-ci peut être
				détruit par les taupes avec leurs taupinières et galeries de
				chasse en surface. Leur éradication doit être rapide ou
				préventive car elles doivent être supprimées avant
				engazonnement.
			</p>
		</AccordionItem>
	</Accordion>

	<!-- PARTENARIAT -->
	<h2>
		Partenariat

		<img
			src="/img/tondeuse.png"
			alt="Services à la personne"
			style="max-width: 12%"
		/>
		<img
			src="/img/tronconneuse.png"
			alt="Services à la personne"
			style="max-width: 12%"
		/>

		<img
			src="/img/servpersonnetr.png"
			alt="Services à la personne"
			style="max-width: 12%"
		/>
		<img
			src="/img/immobilier.png"
			alt="Services à la personne"
			style="max-width: 10%"
		/>
	</h2>
	<hr />

	<Accordion>
		<AccordionItem>
			<h3 class="m-0" slot="header">
				Entreprises de jardiniers paysagistes et d’entretien de parcs et
				jardins et élagueurs grimpeurs
			</h3>
			<p>
				L’entreprise Taupier du sud travaille en étroite collaboration
				avec les paysagistes et élagueurs de votre région lors de
				travaux de création de nouveaux gazons, d’aménagements paysagers
				ainsi que pour l’entretien de vos parcs et jardins afin
				d’optimiser l’esthétique de vos extérieurs.
			</p>

			<p>
				Je travaille aussi avec toutes les autres entreprises
				travaillant pour l’extérieur des maisons&nbsp;: pisciniste,
				terrassier, puisatier, sourcier, plombier (irrigation de
				jardin), etc.
			</p>
		</AccordionItem>
	</Accordion>

	<Accordion>
		<AccordionItem>
			<h3 class="m-0" slot="header">
				Entreprises services à la personne
			</h3>
			<img
				src="/img/servpersonne.jpg"
				alt="Services à la personne"
				class="img-fluid max-width: 10% height:auto"
			/>
			<p>
				Si vous êtes employé d'une société de services à la personne et
				que vous constatez des nuisances ou des dégâts causés par les
				taupes chez vos clients, n'hésitez pas à informer votre
				employeur afin qu'il fasse appel à Taupier du sud.
			</p>
			<p>
				Si vous êtes salarié dans le cadre des services à la personne et
				que vous constatez des nuisances ou des dégats causés par les
				taupes chez vos clients, n'hésitez pas à donner mes coordonnées
				à votre client.
			</p>

			<p>
				<span class="text-danger">Remarque</span> :
				<span style="font-style: italic;"
					>les prestations de Taupier du sud ne permettent pas d'avoir
					la réduction fiscale des services à la personne car il
					s'agit d'un artisan intervenant avec son matériel et déclaré
					à la chambre des métiers.</span
				>
			</p>
		</AccordionItem>
	</Accordion>

	<Accordion>
		<AccordionItem>
			<h3 class="m-0" slot="header">Professionnels de l‘immobilier</h3>
			<p>
				Si vous êtes agent immobilier et que vous constatez que les
				espaces verts du bien à vendre sont ravagés par des taupes,
				l'intervention de taupier du sud permettra de présenter au
				client un parc ou un jardin qui ravira le futur acheteur.
			</p>

			<p>
				Si vous gérez des résidences, des compelxes immobiliers ou de
				simpls maisons avec jardins en location possèdant des espaces
				engazonnés, taupier du sud peut également intervenir si vous
				constatez la présence de taupes.
			</p>

			<p>
				J'interviens également pour tout gestionnaire public de
				logements (mairies, HLM...).
			</p>
		</AccordionItem>
	</Accordion>

	<hr />
	<p>
		Intervention écologique de piégeage mécanique sur toutes superficies
		(petit jardin à des surfaces de plusieurs hectares de terres agricoles).
	</p>

	<p>
		On peut conclure que la taupe cause un désordre dans des parcelles
		cultivées et/ou exploitées par l’homme. Pas de panique, l’entreprise
		Taupier du sud s’occupe de toutes les surfaces et terrains ruinés par
		les taupinières !
	</p>

	<img
		src="/img/taupinieres2.jpg"
		alt="Taupinieres"
		class="img-fluid max-width: 40% height:auto"
		/>
		<br />
	<img
		src="/img/taupinieres3.jpg"
		alt="Taupinieres"
		class="img-fluid max-width: 40% height:auto"
		/>
<hr />
		<div class="d-flex justify-content-center ">
			<Button color="warning" size="lg" on:click={gotoDevis}>Vers le formulaire de devis</Button>
		  </div>
</article>

<!-- ---------------- style --------------- -->
<style>
	p {
		margin-top: 0px;
		margin-bottom: 10px;
		color: rgb(90, 90, 90);
		font-size: 17px;
	}

	.charset {
		font-size: 36px;
	}

	article {
		grid-area: trois;
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		align-items: left;
		flex: 1;
	}

	h2 {
		margin-top: 25px;
	}

	h3 {
		margin-top: 25px;
		font-size: 26px;
	}

	h4 {
		color: rgb(0, 96, 0);
	}

/* 	a {
		text-decoration: none;
		color: black;
	}

	a:visited {
		color: black;
	}

	a:hover {
		text-decoration: none;
		color: brown;
	} */
</style>
