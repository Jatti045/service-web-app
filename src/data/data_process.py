import json

def load_json_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def analyze_json(data):
    formatted_price_data = []
    time_series_data = data[list(data.keys())[1]]

    if isinstance(time_series_data, dict):
        for key, value in time_series_data.items():
            if (int(key.split("-")[0]) < 2010):
                continue
            # Grab close value
            new_value = float(value["4. close"])
            # Create a new key with the date and close value
            formatted_price_data.append({"time": key, "value": new_value})
    return formatted_price_data[::-1]


def calc_performance(formatted_price_data):
    performance_data = []
    for i in range(1, len(formatted_price_data)):
        current_value = formatted_price_data[i]["value"]
        previous_value = formatted_price_data[i - 1]["value"]
        performance = ((current_value - previous_value) / previous_value) * 100
        performance_data.append({"time": formatted_price_data[i]["time"], "value": performance})
    return performance_data

def calc_10k(perf_data, offset=1):
    invest_data = []
    invest_data.append({"time": perf_data[0]["time"], "value": 10000})
    sum = 0
    for i in range(1, len(perf_data)):
        performance = perf_data[i]["value"]
        previous_investment = invest_data[-1]["value"]
        new_investment = previous_investment * (1 + (performance * offset) / 100)
        sum+=performance
        invest_data.append({"time": perf_data[i]["time"], "value": new_investment})
    return invest_data

def calc_avg_perf(data, offset=1):
    perf_data = []
    n_datasets = len(data)
    size = len(data[0])

    ds_0 = data[0]
    for i in range(size):
        time = ds_0[i]["time"]
        avg_value = sum(dataset[i]["value"] for dataset in data) / n_datasets
        perf_data.append({"time": time, "value": avg_value})
    return perf_data


def output_file(invest_data, file_names):
    with open(f"formatted/{file_names}_invest_data.json", "w", encoding='utf-8') as f:
        json.dump(invest_data, f, indent=4)

def run_all():
    # Load each data source
    nasdaq_data = load_json_file("raw/query_nasdaq.json")
    sp500_data = load_json_file("raw/query_sp500.json")
    tsx_data = load_json_file("raw/query_tsx.json")

    # Extract prices
    prices_nasdaq = analyze_json(nasdaq_data)
    prices_sp500 = analyze_json(sp500_data)
    prices_tsx = analyze_json(tsx_data)

    # Analyze performance
    perf_nasdaq = calc_performance(prices_nasdaq)
    perf_sp500 = calc_performance(prices_sp500)
    perf_tsx = calc_performance(prices_tsx)

    # Grab 10k investment data
    invest_nasdaq = calc_10k(perf_nasdaq, offset=0.8)
    invest_sp500 = calc_10k(perf_sp500, offset=1.1)
    invest_tsx = calc_10k(perf_tsx)

    output_file(invest_nasdaq, "qqq")
    output_file(invest_sp500, "spy")
    output_file(invest_tsx, "tsx")

    avg_perf = calc_avg_perf([perf_nasdaq, perf_sp500])
    final_10k = calc_10k(avg_perf, offset=1.047)

    output_file(final_10k, "iba")

if __name__ == "__main__":
    run_all()