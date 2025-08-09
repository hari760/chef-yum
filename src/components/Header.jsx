import chefYumLogo from "/src/assets/chef-yum-logo.png"

export default function Header() {
    return (
        <header>
            <img src={chefYumLogo}/>
            <h1>Chef Yum</h1>
        </header>
    )
}