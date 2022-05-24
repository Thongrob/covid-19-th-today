
function Footer() {
  return (
    <section className="footer mt-3">
    <div className="container">
      <footer className="py-5">
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p> © 2022 Thongrob Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></li>
            <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></li>
            <li className="ms-3"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></li>
          </ul>

        </div>
      </footer>
    </div>
  </section>
  )
}

export default Footer