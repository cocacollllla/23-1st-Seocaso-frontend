import React from 'react';

import './Graph.scss';

class Graph extends React.Component {
  graphList = () => {
    let valueArry = Object.values(this.state.info.evaluation_graphs);
    let max = valueArry.reduce((prev, cur) => {
      return prev > cur ? prev : cur;
    });
    let current = valueArry.map(i => {
      return (i / max) * 88;
    });
    return current;
  };

  changeColor = height => {
    if (height === 88) {
      return '#996633';
    }
  };

  render() {
    const { info } = this.props;

    let max =
      info.id &&
      info.evaluation_graphs.reduce((prev, cur) => {
        return prev > cur ? prev : cur;
      });

    let percent =
      info.id &&
      info.evaluation_graphs.map(i => {
        return (i / max) * 88;
      });

    return (
      <section className="main-bot">
        <div className="bot-container">
          <div className="header-container">
            <h2 className="span-info2">별점 그래프</h2>
            <div className="header-right">
              <div className="average-rate">
                평균 ★{this.props.graph.average}
              </div>
              <div className="average-people">
                {this.props.graph.total_count}명
              </div>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-float">
              <div className="graphs">
                <div
                  className="graph-1 graph"
                  style={{
                    height: info.id && percent[0],
                    backgroundColor: info.id && this.changeColor(percent[0]),
                  }}
                ></div>
                <div
                  className="graph-2 graph"
                  style={{
                    height: info.id && percent[1],
                    backgroundColor: info.id && this.changeColor(percent[1]),
                  }}
                >
                  <span className="numbering">1</span>
                </div>
                <div
                  className="graph-3 graph"
                  style={{
                    height: info.id && percent[2],
                    backgroundColor: info.id && this.changeColor(percent[2]),
                  }}
                ></div>
                <div
                  className="graph-4 graph"
                  style={{
                    height: info.id && percent[3],
                    backgroundColor: info.id && this.changeColor(percent[3]),
                  }}
                >
                  <span className="numbering">2</span>
                </div>
                <div
                  className="graph-5 graph"
                  style={{
                    height: info.id && percent[4],
                    backgroundColor: info.id && this.changeColor(percent[4]),
                  }}
                ></div>
                <div
                  className="graph-6 graph"
                  style={{
                    height: info.id && percent[5],
                    backgroundColor: info.id && this.changeColor(percent[5]),
                  }}
                >
                  <span className="numbering">3</span>
                </div>
                <div
                  className="graph-7 graph"
                  style={{
                    height: info.id && percent[6],
                    backgroundColor: info.id && this.changeColor(percent[6]),
                  }}
                ></div>
                <div
                  className="graph-8 graph"
                  style={{
                    height: info.id && percent[7],
                    backgroundColor: info.id && this.changeColor(percent[7]),
                  }}
                >
                  <span className="numbering">4</span>
                </div>
                <div
                  className="graph-9 graph"
                  style={{
                    height: info.id && percent[8],
                    backgroundColor: info.id && this.changeColor(percent[8]),
                  }}
                ></div>
                <div
                  className="graph-10 graph"
                  style={{
                    height: info.id && percent[9],
                    backgroundColor: info.id && this.changeColor(percent[9]),
                  }}
                >
                  <span className="numbering">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Graph;
