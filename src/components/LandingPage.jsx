import React from 'react'
import { Link, createBrowserRouter } from 'react-router-dom'
import { Shield, Lock, RefreshCw, Share2 } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import Manager from './Manager'

// Simple Button component
const Button = ({ children, className, variant, ...props }) => (
    <button
        className={`px-4 py-2 rounded ${variant === 'outline'
            ? 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
            : 'bg-green-500 text-black hover:bg-green-600'
            } ${className}`}
        {...props}>
        {children}
    </button>
)

// Simple Input component
const Input = ({ className, ...props }) => (
    <input
        className={`px-3 py-2 border border-green-500 rounded bg-black text-white placeholder-gray-400 ${className}`}
        {...props}
    />
)

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white ">

            <Navbar />

            <main className="flex flex-col">
                <section className=" py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Secure Your Digital Life
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                    Manage all your passwords with ease and security. Stay protected in the digital world with SecureVault.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link to={'/home'}><Button>Get Started</Button></Link>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" py-12 md:py-24 lg:py-32 bg-green-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 items-center">
                            <div className="flex flex-col justify-center space-y-8 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Why Choose SecureVault?
                                    </h2>
                                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                                        Our password manager offers top-notch security features to keep your digital life safe and organized.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4 items-start">
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <Lock className="h-12 w-12 text-green-500" />
                                    <h3 className="text-xl font-bold">Strong Encryption</h3>
                                    <p className="text-sm text-gray-400">Your data is protected with military-grade encryption.</p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <RefreshCw className="h-12 w-12 text-green-500" />
                                    <h3 className="text-xl font-bold">Auto-Sync</h3>
                                    <p className="text-sm text-gray-400">Access your passwords across all your devices seamlessly.</p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <Shield className="h-12 w-12 text-green-500" />
                                    <h3 className="text-xl font-bold">Two-Factor Auth</h3>
                                    <p className="text-sm text-gray-400">Add an extra layer of security to your account.</p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <Share2 className="h-12 w-12 text-green-500" />
                                    <h3 className="text-xl font-bold">Secure Sharing</h3>
                                    <p className="text-sm text-gray-400">Share passwords safely with family or team members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Ready to Secure Your Passwords?
                                </h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                                    Join thousands of users who trust SecureVault with their digital security.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input
                                        placeholder="Enter your email"
                                        type="email"
                                        className="flex-1"
                                    />
                                    <Button type="submit">
                                        Sign Up
                                    </Button>
                                </form>
                                <p className="text-xs text-gray-400">
                                    By signing up, you agree to our{" "}
                                    <Link to="#" className="underline underline-offset-2 text-green-500">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default LandingPage