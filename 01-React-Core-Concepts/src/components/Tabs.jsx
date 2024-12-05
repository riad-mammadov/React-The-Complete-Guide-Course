export default function Tabs({ children, buttons, Container = 'menu' }) {

    return <>
        <Container>{buttons}</Container>
        {children}
    </>
}