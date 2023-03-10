import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import epdata from '../data/employees.json'
import { useState } from 'react'
import Profile from '../components/Employees'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    console.log(epdata)

    const [employeeData, setEmployeeData] = useState([...epdata]) //this says to just enter this data into the useState. When we call the useState, it will call the information. 

    return (
        <>
            <Head>
                <title>About Creative</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <p className={styles.description}>
                    <Link href="/" className={styles.link}>Home</Link>
                </p>

                <div className={styles.heading}>
                <h1>About the Team</h1>
                </div>

                <div className={styles.grid}>
                    <div className={styles.headerSpacing}>
                        <b>Creative Team</b>
                    </div>
                    <div className={styles.profiles}>
                        {employeeData && employeeData.map((epdata, index) => {
                            if (epdata.department === "Creative") { //this filters thru the department key in the education.json file. You can add "info.department.toLowerCase()" if you want it to find upper (exact) casing or lower case is okay too.
                                return (
                                    <Profile key={index}
                                        image={epdata.image}
                                        name={epdata.name}
                                        position={epdata.position}
                                        department={epdata.department}
                                        email={epdata.email}
                                        phoneNumber={epdata.phoneNumber}
                                        yearsWorked={epdata.yearsWorked}
                                        bio={epdata.bio}
                                        colour="var(--wine)" /> //This is pulling the Card component, passing over the degree property
                                )
                            }
                        })}
                    </div>
                    <div className={styles.headerSpacing}>
                        <b>Marketing</b>
                    </div>
                    <div className={styles.profiles}>
                        {employeeData && employeeData.map((epdata, index) => {
                            if (epdata.department === "Marketing") {
                                return (
                                    <Profile key={index}
                                        image={epdata.image}
                                        name={epdata.name}
                                        position={epdata.position}
                                        department={epdata.department}
                                        email={epdata.email}
                                        phoneNumber={epdata.phoneNumber}
                                        yearsWorked={epdata.yearsWorked}
                                        bio={epdata.bio}
                                        colour="var(--teal)" /> //This is pulling the Card component, passing over the degree property
                                )
                            }
                        })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
