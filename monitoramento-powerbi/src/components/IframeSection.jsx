    import { useLocation, useParams } from "react-router-dom";

    const IframeSection = () => {
        const location = useLocation()

        const params = new URLSearchParams(location.search)
        const painelUrl = params.get('url')

        return (
            <section className="flex-grow-1 d-flex">
                <iframe
                    src={painelUrl}
                    title="Painel"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    className="w-100 h-100 border-0"
                />
            </section>
        );
    }

    export default IframeSection;