document.addEventListener("DOMContentLoaded", async function () {


    const userId = getUserIdFromURL();

    let wallet_data = null;

    try {
        wallet_data = await get_config(userId); // Запрос конфига из datacontroller
        // wallet_data = localConfig; // Запрос конфига из datacontroller

        if (!wallet_data.wallet || wallet_data.wallet.trim() === "") {
            showPopup(`You don't have active wallet. ⚠️`, false);
            return null;
        }

        if (!wallet_data.tokens.BTC.time_to_mine || wallet_data.tokens.BTC.time_to_mine.trim() === "") {
            showPopup(`Please close your minning account and open it up again to get the your information UpToDate. 🛠`, false);
            return null;
        }

    } catch (error) {
        console.error("Ошибка при получении конфигурации:", error);
        showPopup(`Please close your minning account and open it up again to get the your information UpToDate. 🛠`, false);
        return null;
    }

    //Initialization
    loadWalletData(wallet_data);

    function loadWalletData(data) {
        if (walletAddressElement) {
            const fullWallet = data.wallet;
            if (fullWallet.length > 40) {
                walletAddressElement.textContent = `${fullWallet.slice(0, 10)}...${fullWallet.slice(-10)}`;
            } else {
                walletAddressElement.textContent = fullWallet; // Если адрес короче 40 символов, отображаем полностью
            }
        }

        if (balanceElement) {

            const balance = data.tokens.BTC.balance || 0;
            balanceElement.textContent = `${balance.toFixed(4)}`;
        }
    }

    function getUserIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("user_id");
    }
});