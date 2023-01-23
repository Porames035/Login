import { Button, Breadcrumb,BreadcrumbItem,BreadcrumbLink } from '@chakra-ui/react'
import useSignOut from '../useSignOut';
const cookie = require('cookies-next');
const jwt = require('jsonwebtoken');


const key  = 'keyPassword'

export async function getServerSideProps({ req, res }) {

    try {
        const getToken = cookie.getCookies({ req, res });
        const decode = jwt.verify( getToken.token, key )
        return { props: {} };
    } 
    catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        }
    }
}


export default function Home() {

    const logOut = useSignOut()

  return (
    <div>
        <Breadcrumb spacing='8px' separator='-'>
            <BreadcrumbItem>
                <Button onClick={ logOut.editData } colorScheme={'green'}>Edit Account</Button>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Button colorScheme={'yellow'}>Delete Account</Button>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Button onClick={ logOut.signOut } colorScheme={'red'}>Sign Out</Button>
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
  )
}