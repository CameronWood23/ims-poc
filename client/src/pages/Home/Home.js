import React from "react"
import { FaBriefcaseMedical } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Home.scss"
import heroImg from "../../assets/inv-img.webp"
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink"

function Home() {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <FaBriefcaseMedical size={35} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      <section className="container hero">
        <div className="hero-text">
          <h2>Hospital Inventory Management Proof of Concept</h2>
          <p>
            This is a proof of concept project related to Hospital Inventory
            Management Systems developed by Innovia Colabs.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/">Contact Innovia</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="0" text="Active Users" />
            <NumberText num="0" text="Active Managers" />
            <NumberText num="0" text="Admins" />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  )
}

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  )
}

export default Home
