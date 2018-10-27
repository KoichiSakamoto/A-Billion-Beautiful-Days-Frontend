import React, { Component } from 'react';
import Header from '../components/Header';

//Multiple tables displaying sizing information.
//Table code lifted from Shopify website HTML.

export default class SizingInfo extends Component {

  render() {
    return ( <div>
              <Header />
              <main className="center-text">
                <h2> TShirts </h2>
                <table cellpadding="5" align="center">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td><strong>XS</strong></td>
                      <td><strong>S</strong></td>
                      <td><strong>M</strong></td>
                      <td><strong>L</strong></td>
                      <td><strong>XL</strong></td>
                      <td><strong>2XL</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Chest Width (inches) </strong></td>
                      <td>16 3/8</td>
                      <td>18 3/8</td>
                      <td>20 3/8</td>
                      <td>22 3/8</td>
                      <td>24 3/8</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td><strong>Body Length (inches) </strong></td>
                      <td>28 1/2</td>
                      <td>29 1/2</td>
                      <td>30 3/8</td>
                      <td>31 5/8</td>
                      <td>32 5/8</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td><strong>Sleeve Lenght (inches) </strong></td>
                      <td>8</td>
                      <td>8 3/8</td>
                      <td>8 5/8</td>
                      <td>9</td>
                      <td>9 1/4</td>
                      <td>9 1/4</td>
                    </tr>
                    </tbody>
                  </table>

                <h2> Tanktops </h2>
                <table cellpadding="5" align="center">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td><strong>XS</strong></td>
                      <td><strong>L</strong></td>
                      <td><strong>XL</strong></td>
                      <td><strong>2XL</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Chest (inches) </strong></td>
                      <td>30-32</td>
                      <td>42-44</td>
                      <td>46-48</td>
                      <td>50-52</td>
                    </tr>
                    <tr>
                      <td><strong>Waist (inches) </strong></td>
                      <td>28-30</td>
                      <td>33-34</td>
                      <td>36-38</td>
                      <td>40-42</td>
                    </tr>
                  </tbody>
                </table>

                <h2> Longsleeves </h2>
                <table cellpadding="5" align="center">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td><strong>S</strong></td>
                      <td><strong>M</strong></td>
                      <td><strong>L</strong></td>
                      <td><strong>XL</strong></td>
                      <td><strong>2XL</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Chest (inches) </strong></td>
                      <td>34-36</td>
                      <td>38-40</td>
                      <td>42-44</td>
                      <td>46-48</td>
                      <td>48-50</td>
                    </tr>
                    <tr>
                      <td><strong>Waist (inches) </strong></td>
                      <td>30-32</td>
                      <td>32-33</td>
                      <td>33-34</td>
                      <td>36-38</td>
                      <td>40-42</td>
                    </tr>
                  </tbody>
                </table>
              </main>
             </div>
          )}
}
