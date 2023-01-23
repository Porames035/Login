import { useRouter } from 'next/router';

const cookie = require('cookies-next');

export default function useSignOut() {

    const router = useRouter()
    
    // Sign Out Account
    function signOut( { req, res } ) {
        cookie.deleteCookie('token', { req, res })
        window.location.reload()
    }

    // Edit Data Account
    const editData = () => {
        router.push('/editData')
    }

    // Delete Account
    function deleteData() {
        //
    }


    return {
        signOut,
        editData,
        deleteData
    }
}
