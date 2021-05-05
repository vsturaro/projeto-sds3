const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead  className="text-center">
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>22/04/2021</td>
                        <td>João</td>
                        <td>34</td>
                        <td>27</td>
                        <td>R$ 15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Kaline</td>
                        <td>50</td>
                        <td>33</td>
                        <td>R$ 22044.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Edson</td>
                        <td>24</td>
                        <td>11</td>
                        <td>R$ 15012.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Paulo</td>
                        <td>41</td>
                        <td>30</td>
                        <td>R$ 25017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
