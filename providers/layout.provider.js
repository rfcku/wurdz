import { Grid, Card, Text, Container, Row, Col } from '@nextui-org/react';
import { useSession, signIn, signOut } from "next-auth/react"
export default function Layout({ children, ...etc }) {
    const { data: session } = useSession()
    return (
        <Container fluid>
            {children}
        </Container>
    )
}