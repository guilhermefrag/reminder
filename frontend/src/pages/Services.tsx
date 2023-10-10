import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material'

export default function Services() {
    const handleDonate = (path: string) => {
        window.open(path, '_blank')
    }

    const services = [
        {
            title: 'Service 1',
            description: 'Description of Service 1.',
            url: 'https://guido.org.br/faca-uma-doacao-guido/',
        },
        {
            title: 'Service 2',
            description: 'Description of Service 2.',
            url: 'https://guido.org.br/faca-uma-doacao-guido/',
        },
        {
            title: 'Service 3',
            description: 'Description of Service 3.',
            url: 'https://guido.org.br/faca-uma-doacao-guido/',
        },
    ]

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginBottom: '2%' }}>
                We currently do not offer any services. If you'd like to make a donation to support children with
                cancer, please click the button below.
            </Typography>
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                                <Button
                                    onClick={() => handleDonate(service.url)}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginTop: '16px' }}
                                >
                                    Donate
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
