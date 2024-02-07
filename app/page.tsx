import React from 'react'
import {Progress, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const Page = () => {
  return (
	<div className="flex flex-col gap-6 w-full max-w-md">
		<Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      <Progress color="default" aria-label="Loading..." value={70} />
      <Progress color="primary" aria-label="Loading..." value={70} />
      <Progress color="secondary" aria-label="Loading..." value={70} />
      <Progress color="success" aria-label="Loading..." value={70} />
      <Progress color="warning" aria-label="Loading..." value={70} />
      <Progress color="danger" aria-label="Loading..." value={70} />
    </div> 
  )
}

export default Page