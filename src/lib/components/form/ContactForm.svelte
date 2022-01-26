<!-- ---------- script ------------- -->
<script>
    import schemaContact from "./schemaContact";
    //import { extractErrors } from "./utils";
    //
    import InputEmail from "./InputEmail.svelte";
    import TextArea from "./TextArea.svelte";
    import SubmitButton from "./SubmitButton.svelte";
    import InputPhone from "./InputPhone.svelte";
    import InputTextGoogleIcon from "./InputTextGoogleIcon.svelte";
    //
    let submit;
    const initial = {
        prenom: "",
        nom: "",
        telephone: "",
        _replyto: "",
        _subject: "",
        message: "",
    };
    let errors = {};
    let values = { ...initial };

    // --------------------------------------- validate()
    const validate = (path) => {
        try {
            schemaContact.validateSyncAt(path, values);
            delete errors[path];
            errors = { ...errors };
        } catch (err) {
            errors[path] = err.errors;
        }
    };

    // --------------------------------------- handleSubmit()
    function handleSubmit() {
        try {
            schemaContact.validateSync(values, { abortEarly: false });
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
                    alert("Le formulaire de contact a été envoyé.");
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
<form on:submit|preventDefault={handleSubmit} class="mt-3" method="post">
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
        <InputPhone
            label="Téléphone :"
            bind:value={values.telephone}
            name="telephone"
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
        <InputTextGoogleIcon
            label="Objet :"
            bind:value={values._subject}
            placeholder="Objet du message..."
            name="_subject"
            icon="&#xe88e;"
            {errors}
            {validate}
        />
        <TextArea
            label="Message :"
            bind:value={values.message}
            placeholder="Votre message..."
            name="message"
            {errors}
            {validate}
        />
    </fieldset>

    <p style="font-size: 16px" class="d-flex justify-content-center">
        N'hésitez pas à m'appeler si besoin au &nbsp;
        <span style="font-weight: bold">
            <a href="tel:06-16-28-65-58">
                <img
                    src="/img/phone.png"
                    alt="Téléphone"
                    style="max-width: 25px; height: auto;"
                />
                06 16 28 65 58</a
            >
        </span>
    </p>
    <hr />
    <div>
        <SubmitButton label="Envoyer" onClick={handleSubmit} />
    </div>
</form>

<!-- {#if submit}
    {#await submit}
        <p>Envoie du message</p>
    {:then resp}
        <p>Message envoyé.</p>
        <div>{resp}</div>
        <pre>RESPONSE: {JSON.stringify(resp, null, 2)}</pre>
    {/await}
{/if} -->

<!-- ---------- style ------------- -->
<style>
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

    a {
        color: rgb(111, 109, 109);
        text-decoration: none;
    }
    a:hover {
        color: brown;
        text-decoration: none;
    }
</style>
