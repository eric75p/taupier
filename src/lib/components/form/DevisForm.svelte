<!-- ---------- script ------------- -->
<script>
    import schemaDevis from "./schemaDevis";
    import { extractErrors } from "./utils";
    //
    import InputText from "./InputText.svelte";
    import InputTextIcon from "./InputTextIcon.svelte";
    import InputTextGoogleIcon from "./InputTextGoogleIcon.svelte";
    import InputEmail from "./InputEmail.svelte";
    import InputPhone from "./InputPhone.svelte";
    import InputNumber from "./InputNumber.svelte";
    import TextArea from "./TextArea.svelte";
    import InputBoolean from "./InputBoolean.svelte";
    import SelectOption from "./SelectOption.svelte";
    import SubmitButton from "./SubmitButton.svelte";
    import InputGPS from "./InputGPS.svelte";

    // ------------------------------------------------
    const listeTypes = [
        { value: "", label: "Choisissez une option..." },
        { value: "Agriculteur", label: "Agriculteur" },
        { value: "Collectivité", label: "Collectivité" },
        { value: "Entreprise", label: "Entreprise" },
        { value: "Mairie", label: "Mairie" },
        { value: "Particulier", label: "Particulier" },
    ];
    // ------------------------------------------------
    const listeSuperficies = [
        { value: "", label: "Choisissez une superficie..." },
        { value: "10-500", label: "10 à 500 m2" },
        { value: "500-1000", label: "500 à 1 000 m2" },
        { value: "1000-5000", label: "1 000 à 5 000 m2" },
        { value: "5000-10000", label: "5 000 à 10 000 m2" },
        { value: "plus1Hectare", label: "Plus de 1 hectare (10 000 m2)" },
    ];
    // ------------------------------------------------
    const listeNbrTaupes = [
        { value: "", label: "Indiquez le nombre de taupinères..." },
        { value: "1-20", label: "De 1 à 20" },
        { value: "21-50", label: "De 21 à 50" },
        { value: "51-100", label: "De 51 à 100" },
        { value: "Sup100", label: "Plus de 100" },
    ];
    // ------------------------------------------------
    const listeTypeTerrain = [
        { value: "", label: "Sélectionnez le type de terrain" },
        { value: "Gazon/Pelouse", label: "Gazon/Pelouse" },
        { value: "Espaces verts/Prairies", label: "Espaces verts/Prairies" },
        {
            value: "Jeunes semis",
            label: "Jeunes semis de gazon (Printemps/Hiver)",
        },
        { value: "Verger", label: "Verger" },
        { value: "Potager", label: "Potager" },
        { value: "Bois/Forêt", label: "Bois/Forêt" },
        { value: "Terres agricoles", label: "Terres agricoles" },
        { value: "Parc de château", label: "Parc de château" },
        { value: "Gîtes", label: "Gîtes" },
        { value: "Camping", label: "Camping" },
        { value: "Terrain de sport", label: "Terrain de sport" },
        { value: "Green/Golf", label: "Green/Golf" },
        { value: "Hippodrome", label: "Hippodrome" },
        { value: "Autre type", label: "Autre type (précisez dans remarques)" },
    ];
    // ------------------------------------------------
    const listeEnvProche = [
        { value: "", label: "Indiquez l'environnement proche..." },
        { value: "Bois/Forêt", label: "Bois/Forêt" },
        { value: "Champs/prairies", label: "Champs/prairies" },
        { value: "Étang/Ruisseau", label: "Étang ou ruisseau" },
        { value: "Zone industrielle", label: "Zone industrielle" },
        { value: "Zone urbaine", label: "Zone urbaine" },
        { value: "Autre", label: "Autre (précisez dans remarques)" },
    ];
    // ------------------------------------------------
    let submit;
    const initial = {
        prenom: "",
        _replyto: "",
        _subject: "Demande de devis",
        telephone: "",
        nom: "",
        voisins: "",
        voisinsAvecTaupes: "",
        type: "",
        superficie: "",
        nbrTaupes: "",
        typeTerrain: "",
        envProche: "",
        remarques: "",
        ratTaupier: "",
        //
        adresse1: "",
        adresse2: "",
        codePostal: "",
        ville: "",
        //
        gps: "",
        gpscadastre: "",
    };
    let errors = {};
    let values = { ...initial };

    // --------------------------------------- validate()
    const validate = (path) => {
        try {
            schemaDevis.validateSyncAt(path, values);
            delete errors[path];
            errors = { ...errors };
        } catch (err) {
            errors[path] = err.errors;
        }
    };

    // --------------------------------------- handleSubmit()
    function handleSubmit() {
        try {
            schemaDevis.validateSync(values, { abortEarly: false });
            // console.clear();
            // console.log(values);
            errors = {};
            // alert(JSON.stringify(values, null, 2));
            submit = fetch("https://formspree.io/f/moqrjnjv", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "content-type": "application/json" },
            })
                .then((resp) => resp.json())
                .finally(() => {
                    alert("Le formulaire de devis a été envoyé.")
                });
                //.finally(() => setTimeout(() => (submit = null), 5000));

        } catch (err) {
            alert("Impossible d'envoyer le formulaire.");
            alert("err =" + err);

            if (err.inner) {
                errors = extractErrors(err.inner);
                alert(errors);
            }
        }
    }
</script>

<!-- ---------- markup ------------- -->
<div class="form">
    <form on:submit|preventDefault={handleSubmit} class="mt-5" method="post">
        <input type="hidden" name="_next" value="/thanks.html" />

        <!-- ****************************** -->
        <!-- Coordonnées -->
        <fieldset>
            <legend>Vos coordonnées</legend>
            <InputTextGoogleIcon
                label="Prénom :"
                bind:value={values.prenom}
                placeholder="Saisissez votre prénom..."
                name="prenom"
                icon="&#xe7fd;"
                {errors}
                {validate}
            />
            <InputTextGoogleIcon
                label="Nom :"
                bind:value={values.nom}
                placeholder="Saisissez votre nom..."
                name="nom"
                icon="&#xe7fd;"
                {errors}
                {validate}
            />
            <InputEmail
                label="Email :"
                bind:value={values._replyto}
                name="_replyto"
                {errors}
                {validate}
            />
            <InputPhone
                label="Téléphone :"
                bind:value={values.telephone}
                name="telephone"
                {errors}
                {validate}
            />

            <SelectOption
                label="Vous êtes :"
                bind:value={values.type}
                name="type"
                values={listeTypes}
                {errors}
                {validate}
            />
        </fieldset>

        <!-- ****************************** -->
        <!-- Adresse -->
        <fieldset>
            <legend>Adresse du lieu</legend>
            <InputTextIcon
                label="Adresse :"
                bind:value={values.adresse1}
                placeholder="10 avenue Général..."
                name="adresse1"
                icon="&#127968;"
                {errors}
                {validate}
            />
            <InputTextIcon
                label="Complément d'adresse (optionnel)"
                bind:value={values.adresse2}
                placeholder=""
                name="adresse2"
                icon="&#127968;"
                {errors}
                {validate}
            />
            <InputNumber
                label="Code postal :"
                bind:value={values.codePostal}
                placeholder="Exemple : 81000"
                name="codePostal"
                min="0"
                max="999999"
                {errors}
                {validate}
            />
            <InputText
                label="Ville :"
                bind:value={values.ville}
                placeholder="Exemple : Albi"
                name="ville"
                {errors}
                {validate}
            />
            <InputGPS
                label="Coordonnées GPS :"
                bind:value={values.gps}
                placeholder="43.928750320420264, 2.125813681558322"
                name="gps"
                {errors}
                {validate}
            />
            <div id="geoportail">
                <a href="https://www.google.fr/maps" target="_blank">
                    <img
                        src="/static/img/googlemaps.png"
                        alt="Logo geoportail"
                        style="width:8%"
                    /></a
                >
            </div>
        </fieldset>

        <!-- ****************************** -->
        <!-- Lieu de piégeage -->
        <fieldset>
            <legend>Description du lieu de piégeage</legend>
            <SelectOption
                label="Superficie du terrain :"
                bind:value={values.superficie}
                name="superficie"
                values={listeSuperficies}
                {errors}
                {validate}
            />
            <SelectOption
                label="Nombre de taupinières :"
                bind:value={values.nbrTaupes}
                name="nbrTaupes"
                values={listeNbrTaupes}
                {errors}
                {validate}
            />

            <SelectOption
                label="Type de terrain :"
                bind:value={values.typeTerrain}
                name="typeTerrain"
                values={listeTypeTerrain}
                {errors}
                {validate}
            />

            <InputBoolean
                label="Votre terrain est également envahi de rats taupiers ?"
                bind:value={values.ratTaupier}
                name="ratTaupier"
                {validate}
                {errors}
            />

            <SelectOption
                label="Sélectionnez l’environnement proche de votre terrain à piéger :"
                bind:value={values.envProche}
                name="envProche"
                values={listeEnvProche}
                {errors}
                {validate}
            />
        </fieldset>

        <div class="m-2">
            Vous pouvez également m’envoyer des photos par SMS au<br />
            <span style="font-weight: bold"> 06 16 28 65 58 </span> afin que je puisse
            mieux évaluer l’étendue des désagréments causés par les taupes.
        </div>

        <!-- ****************************** -->
        <!-- GPS... -->
        <fieldset>
            <legend>Pour les terrains agricoles à piéger</legend>

            <TextArea
                label="Coordonnées GPS et numéros de parcelles cadastrales :"
                bind:value={values.gpscadastre}
                placeholder=""
                name="gpscadastre"
                rows="3"
                {errors}
                {validate}
            />
            <div id="geoportail">
                <a href="https://www.google.fr/maps" target="_blank">
                    <img
                        src="/static/img/googlemaps.png"
                        alt="Logo geoportail"
                        style="width:8%"
                    /></a
                >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.geoportail.gouv.fr/carte" target="_blank">
                    <img
                        src="/static/img/logo-geoportail.svg"
                        alt="Logo geoportail"
                        style="width:25%"
                    /></a
                >
            </div>
        </fieldset>

        <!-- ****************************** -->
        <!-- Compléments d'information... -->
        <fieldset>
            <legend>Informations complémentaires</legend>
            <InputBoolean
                label="Vos voisins ont également des taupes ?"
                bind:value={values.voisinsAvecTaupes}
                name="voisinsAvecTaupes"
                {validate}
                {errors}
            />
            <InputBoolean
                label="Vous envisagez une action de piégeage avec vos voisins ?"
                bind:value={values.voisins}
                name="voisins"
                {validate}
                {errors}
            />
            <div id="remark">
                Une action collective sera plus efficace et vous<br />reviendra
                moins chère.
            </div>

            <TextArea
                label="Remarques :"
                bind:value={values.remarques}
                placeholder="Remarques éventuelles..."
                name="remarques"
                {errors}
                {validate}
            />
        </fieldset>

        <p style="font-size: 16px">
            N'hésitez pas à m'appeler si besoin
            <span style="font-weight: bold">
                <a href="tel:06-16-28-65-58">
                    <img
                        src="/static/img/phone.png"
                        alt="Téléphone"
                        style="max-width: 25px; height: auto;"
                    />
                    06 16 28 65 58</a
                >
            </span>
        </p>

        <input type="hidden" name="_subject" bind:value={values._subject} />
        <hr />
        <div>
            <SubmitButton label="Envoyer la demande" onClick={handleSubmit} />
        </div>
    </form>
</div>
<br />
<!-- {#if submit}
    {#await submit}
        <p>Sending...</p>
    {:then resp}
        <p>🎉 Done!</p>
        <div>{resp}</div>
        <pre>RESPONSE: {JSON.stringify(resp, null, 2)}</pre>
    {/await}
{/if} -->

<!-- ---------- style ------------- -->
<style>
    .form {
        max-width: 500px;
        margin-left: 40px;
    }

    fieldset {
        background-color: rgba(120, 150, 80, 0.4);
        margin-bottom: 10px;
        padding-top: 5px;
        padding-bottom: 10px;
        border-radius: 10px;
    }

    legend {
        font-size: 20px;
        display: block;
        padding-left: 5px;
        padding-right: 2px;
    }

    #remark {
        margin-left: 45px;
        margin-top: -5px;
        font-style: italic;
        font-size: 15px;
        color: rgb(150, 150, 150);
    }

    #geoportail {
        margin-left: 25px;
        margin-top: -5px;
        font-size: 15px;
    }

    a {
        color: black;
        text-decoration: none;
    }
    a:visited {
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: brown;
        text-decoration: none;
    }
</style>
