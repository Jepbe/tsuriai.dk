export default async function generateStaticParams() {
    const techniques = await fetch('API ROUTE').then((res) => res.json())

    return techniques.map((techniques) => ({
        // id: techniques.slug,
    }))
}

export default function Page( { params  } ) {
    return <h1>technique: {params.throwId}</h1>;
}