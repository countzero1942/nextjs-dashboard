export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'force-no-store'

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <p className="text-lg ml-5">Invoices Page</p>;
  }