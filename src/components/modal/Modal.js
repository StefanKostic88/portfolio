import styled from "styled-components";

const Modal = () => {
  const OverLayStyled = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    // background-color: red;
    z-index: 10;
  `;

  return (
    <OverLayStyled>
      <div>
        <figure>
          <header></header>
          <footer></footer>
        </figure>
      </div>
    </OverLayStyled>
  );
};

export default Modal;

///za ispravku
// Game squad
// 1.2rem 2rem padding li book i dark
// dodaj before na njih
// search games da bude skroz crna slova i bela pozadina

// document.querySelector("body > div.main-wraper > sidebar > ul > li.main-sidebar__list-item.genre > ul > li:nth-child(4) > a")

// side bar genre padding sredi

// slike max width 10rem => ispod onda width 100%
