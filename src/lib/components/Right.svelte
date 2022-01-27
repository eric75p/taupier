<!-- ---------------- script --------------- -->
<script>
    import { Button, Modal } from "sveltestrap";
    import { goto } from "$app/navigation";
    let open = false;
    const toggle = () => (open = !open);
  </script>
  
  <!-- ---------------- markup --------------- -->
  <section id="right" class="p-3">
    <Button
      class="m-2"
      color="success"
      size="sm"
      on:click={() => {
        goto("/ilsMontFaitConfiance");
      }}
    >
      <span class="charset">&#128077;</span> Ils m’ont fait confiance (clients)
    </Button>
  <br />
    <Button
      color="success"
      class="m-2"
      size="sm"
      on:click={() => {
        goto("/ilsMontRecommande");
      }}
    >
      <span class="charset">&#128077;</span> Ils m’ont recommandé (partenaires)
    </Button>
    <br />
  
    <div class="bloc">
      <Button color="danger"
      class="m-2"
  
      size="sm" on:click={toggle}>OFFRE SPÉCIALE</Button>
    </div>
  
    <div class="bloc ms-3">
      <a href="#">
        <img
          src="/img/facebook.svg"
          alt="Logo Facebook"
          class="sociallogo"
        /></a
      >
  
      <a href="#">
        <img
          src="/img/youtube.svg"
          alt="Logo YouTube"
          class="sociallogo"
        /></a
      >
    </div>
  
    <!-- modal-->
    <Modal body header="Offre spéciale" isOpen={open} {toggle}>
      <div style="margin-right: 15px">
        <img
          src="img/taupeSecret.png"
          alt="Taupe albinos"
          class="img-fluid height:auto"
        />
        <br />
        <p class="p-2 text-center" style="font-style: italic">
          Ne l'ébruitez pas, mais si taupier du sud piège une taupe albinos sur
          votre terrain vous bénéficierez de 50 % de réduction sur la prestation.
        </p>
      </div>
    </Modal>
  </section>
  
  <!-- ---------------- style --------------- -->
  <style>
    #right {
      grid-area: quatre;
  /*     background-color: rgba(100, 100, 100, 0.2);
   */    font-size: 14px;
    }
  
    a {
      text-decoration: none;
      color: rgb(70, 70, 70);
    }
  
    .bloc {
      margin-bottom: 10px;
    }
  
    a:hover {
      text-decoration: none;
      color: brown;
    }
  
    .charset {
      font-size: 24px;
    }
  
    .sociallogo {
      max-width: 35px;
    }
  </style>
  