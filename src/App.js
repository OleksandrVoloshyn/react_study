import {Routes, Route, Navigate} from 'react-router-dom'

import {MainLayout} from "./layouts";
import {
    HomePage,
    UsersPage,
    PostsPage,
    AboutPage,
    NotFoundPage,
    SinglePostPage,
    SingleUserPage,
    LoginPage
} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<SingleUserPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
