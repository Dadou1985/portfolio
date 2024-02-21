import React from 'react'
import { 
    Button, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

const DrawerModal = ({child, handleNavigate, language}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <GiHamburgerMenu onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement='left'
          isFullHeight={true}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                <ul style={{
                  display: "flex",
                  flexFlow: "column",
                  listStyleType: "none"
                }}>
                    <Link href="#" className="nav-item" style={{borderBottom: child === "profil" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("profil")}>{language === "en" ? "The pitch": "Le Pitch"}</li></Link>
                    <Link href="#" className="nav-item" style={{borderBottom: child === "parcours" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("parcours")}>{language === "en" ? "The Geek": "Le Geek"}</li></Link>
                    <Link href="#" className="nav-item" style={{borderBottom: child === "projet" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("projet")}>{language === "en" ? "The Code": "Le Code"}</li></Link>
                    <Link href="#" className="nav-item" style={{borderBottom: child === "contact" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("contact")}>Contact</li></Link>
                </ul>
            </DrawerBody>
            <DrawerFooter>
            <Button colorScheme='blue'>Loyalty</Button>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default DrawerModal