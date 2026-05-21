import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth.store'

const KakaoCallback = () => {
    const navigate = useNavigate()
    const { checkAuth } = useAuth()

    useEffect(() => {
        const run = async () => {
            const params = new URLSearchParams(window.location.search)
            const token = params.get('token')

            if (token !== 'session') {
                navigate('/login', { replace: true })
                return
            }

            try {
                await checkAuth()
                navigate('/app', { replace: true })
            } catch {
                navigate('/login', { replace: true })
            }
        }

        run()
    }, [navigate, checkAuth])

    return null
}

export default KakaoCallback