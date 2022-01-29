<!-- ---------------- script --------------- -->
<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<!-- ---------------- markup --------------- -->
<header id="menu">
  <Navbar light expand="md">
    <!-- logo -->
    <NavbarBrand href="/">
      <img
        src="/img/logo4.png"
        alt="logo taupier du sud"
        style="max-width: 100px; height: auto;"
        class="logoPic"
      />

      <img src="img/logo.png" alt="Taupier du Sud" width="180px" />
    </NavbarBrand>
    <!---->
    <!---->
    <!-- responsive menu -->
    <NavbarToggler class="" on:click={() => (isOpen = !isOpen)} />
    <!-- Barre de navigation -->
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="/">ACCUEIL</NavLink>
        </NavItem>

        <Dropdown nav>
          <DropdownToggle nav caret>À PROPOS</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem href="/origines">Origines du métier</DropdownItem>
            <DropdownItem href="/monHistoire">Mon histoire</DropdownItem>
            <DropdownItem href="/taupierNomade">Taupier nomade</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavItem>
          <NavLink href="/prestations">PRESTATIONS</NavLink>
        </NavItem>

        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>INFOS</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem href="/laTaupe">La taupe</DropdownItem>
            <DropdownItem href="/ratTaupier">Le rat taupier</DropdownItem>
            <DropdownItem href="/leQuiz">Le quiz</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavItem>
          <NavLink href="/actualites">ACTUALITÉS</NavLink>
        </NavItem>

        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>CONTACT & DEVIS</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem href="/contact">Contact</DropdownItem>
            <DropdownItem href="/devis">Devis</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>
</header>

<!-- ---------------- style --------------- -->
<style>
  @media only screen and (min-width: 768px) {
    .logoPic {
      display: none;
    }
  }

  #menu {
    grid-area: un;
    font-weight: bold;
    font-size: 14px;
  }
</style>
